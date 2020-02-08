/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import axios from 'axios';
//import session from 'express-session';
import main from './routes/main';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // body parser
app.use(cookieParser()); // cookie-parser
//app.use(session({ secret: config.sessionSecret }));

// para que inicialice la session
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(`${__dirname}/public`));

// Basic Strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('En dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('En prod config');
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized('Error la data viene vacía :('));
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
        });

        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });

    res.status(201).json({
      message: 'User Created',
    });
  } catch (error) {
    next(error);
  }
});

app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server runnin on http://localhost:${PORT}`);
});
