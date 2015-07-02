TestMyCode.run("testing hello function", function(assert){
    var result = hello();
    assert.equals("hello world!", result, "testing hello function");

});

TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello("litha");
    assert.equals("hello!,LITHA", result, "testing hello_uppercase function");
});

TestMyCode.run("testing hello_joe function if Joe is true", function(assert){
    var result = hello_joe("Joe");
    assert.equals("Hello", result, "testing hello_joe function");
});

TestMyCode.run("testing hello_joe function when both are failling", function(assert){
    var result = hello_joe("Nolitha");
    assert.equals("Hello Nolitha", result, "testing hello_joe function");
});

TestMyCode.run("testing hello_joe function when Bob is true", function(assert){
    var result = hello_joe("Bob");
    assert.equals("Hello", result, "testing hello_joe function");
});
TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(3);
    assert.equals([1,2,3,4,5].toString(), result.toString(), "testing number_list function");
});

TestMyCode.run("testing sum_numbers function", function(assert) {
    var result = sum_numbers(3);
    assert.equals(15, result, "testing sum_numbers function");
});
