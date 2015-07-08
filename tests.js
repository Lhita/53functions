QUnit.test("hello test", function(assert) {
	assert.equal(hello(), "hello world!");
});

QUnit.test("hello_uppercase test", function(assert) {
	assert.equal(hello_uppercase("HELLO"), "Hello!HELLO");
});

QUnit.test("hello_joe test", function(assert) {
	assert.equal(hello_joe("Joe"), "Hello!");
	assert.equal(hello_joe("Bob"), "Hello!");
	assert.equal(hello_joe("Nolitha"),"HelloNolitha!");
});

QUnit.test("number_list", function(assert){
	assert.equal(number_list(5),[1,2,3,4,5].toString());
});
QUnit.test("sum_numbers", function(assert){
	assert.equal(sum_numbers[1,2,3,4,5]);
});

QUnit.test("length test", function(assert) {
	assert.equal(length(6));
});

QUnit.test("upper test", function(assert) {
	assert.equal(upper("pretty"),"PRETTY");
});

QUnit.test("reverse test", function(assert) {
	assert.equal(reverse("Rula Nolitha" ));
});

QUnit.test("hello_list test", function(assert) {
	assert.equal(hello_list(2), "hello world,hello world");
});

QUnit.test("high_low test", function(assert) {
	var result = "max =3min =1";
	assert.deepEqual(high_low([1,2,3,4,32]),result);
});
