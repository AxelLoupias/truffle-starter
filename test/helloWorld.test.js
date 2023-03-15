const assert = require('assert');
const { describe, it } = require('mocha');
// eslint-disable-next-line no-undef
const HelloWorld = artifacts.require('HelloWorld');
console.log(true == true);
describe('Hello World', function () {
	it('test initial value', async function () {
		const initialMessage = 'Hello World';
		const helloWorld = await HelloWorld.new(initialMessage);
		console.log('HelloWorld deployed at:' + helloWorld.address);
		assert.equal(
			await helloWorld._message(),
			initialMessage,
			`${initialMessage} no is the message`
		);
	});
	it('test update message and retrieving updated message', async function () {
		const newMessage = 'New message';
		const initialMessage = 'Hello World';
		const helloWorld = await HelloWorld.new(initialMessage);
		await helloWorld.updateMessage(newMessage);
		assert.equal(
			await helloWorld._message(),
			newMessage,
			`${newMessage} is not the current message`
		);
	});
});
