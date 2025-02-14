const pkg = require('../../package.json');

const [homepage] = pkg.homepage.split('#');
const linkify = file => `${homepage}/blob/master/${file}`;

module.exports = {
  EINVALIDASSETS: ({assets}) => ({
    message: 'Invalid `assets` option.',
    details: `The [assets option](${linkify(
      'README.md#assets'
    )}) option must be an \`Array\` of \`Strings\` or \`Objects\` with a \`path\` property.

Your configuration for the \`assets\` option is \`${assets}\`.`,
  }),
  EINVALIDMESSAGE: ({message}) => ({
    message: 'Invalid `message` option.',
    details: `The [message option](${linkify('README.md#message')}) option, if defined, must be a non empty \`String\`.

Your configuration for the \`message\` option is \`${message}\`.`,
  }),
  EINVALIDPUSHFLAGS: ({pushFlags}) => ({
    message: 'Invalid `pushFlags` option.',
    details: `The [pushFlags options](${linkify(
      'README.md#pushflags'
    )}) option, if defined, must be a \`String\` or \`Array\` of \`Strings\`.

Your configuration for the \`pushFlags\` option is \`${pushFlags}\`.`,
  }),
};
