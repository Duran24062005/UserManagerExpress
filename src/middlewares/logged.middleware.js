export const isLogger = (req, _res, next) => {
  let logger = true;
  if (logger) {
    next();
  } else {
    console.log('Logger is off');
  }
  console.log(`Request received at ${new Date().toISOString()}`);
};