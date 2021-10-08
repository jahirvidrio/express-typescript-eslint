import { app } from '@app';

/**
 * Start Express server.
 */
const { PORT, NODE_ENV: MODE } = process.env;

const server = app.listen(PORT, () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    PORT,
    MODE,
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
