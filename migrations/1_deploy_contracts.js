// eslint-disable-next-line no-undef
const HelloWorld = artifacts.require('HelloWorld');

module.exports = function (deployer) {
	deployer.deploy(HelloWorld, 'initialMessage');
};
