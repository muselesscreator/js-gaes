/* eslint-disable no-console */
const strictGet = (target, name, config = {}) => {
  console.log({ target, name, config });
  if (name === Symbol.toStringTag) {
    return target;
  }

  if (name === '$$typeof') {
    return typeof target;
  }

  if (name in target || name === '_reactFragment') {
    return target[name];
  }

  const env = process.env.NODE_ENV;
  console.log({ env });
  if (Object.keys(config).includes(env)) {
    config[env](target, name);
  }
  else {
    console.log(name.toString());
    console.error({ target, name });
    const e = Error(`invalid property "${name.toString()}"`);
    console.error(e.stack);
  }
  return undefined;
};

export default strictGet;