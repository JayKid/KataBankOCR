should = require( "should" );

OCRTool = require( "../src/OCRTool" );

describe( "OCRTool Class", function(){
    it( "Should exist", function(){
        OCRTool.should.be.an.instanceOf( Function );
    });

    describe("Number parser", function(){

        beforeEach(function() {
            this.ocr_tool = new OCRTool();
        });

        it("Should recognize '1'", function(){
            var test_number = 1;
            var test_number_string = "     |  |   ";
            this.ocr_tool.decode(test_number_string);
            this.ocr_tool.getAccountNumber().should.be.eql(test_number);  
        });

        it("Should recognize '2'", function(){
            var test_number = 2;
            var test_number_string =
" _ "+
" _|"+
"|_ "+
"   ";
            this.ocr_tool.decode(test_number_string);
            this.ocr_tool.getAccountNumber().should.be.eql(test_number);  
        });

        it("Should recognize '33'", function() {
            var test_number = 33;
            var test_number_string = " _  _  _| _| _| _|      ";
            this.ocr_tool.decode(test_number_string);
            this.ocr_tool.getAccountNumber().should.be.eql(test_number);
        });

        it("Should recognize '222222222'", function() {
            var test_number = 222222222;
            var test_number_string =
" _  _  _  _  _  _  _  _  _ "+
" _| _| _| _| _| _| _| _| _|"+
"|_ |_ |_ |_ |_ |_ |_ |_ |_ "+
"                           ";
            this.ocr_tool.decode(test_number_string);
            this.ocr_tool.getAccountNumber().should.be.eql(test_number);
        });

        it("Should recognize '490867715'", function() {
            var test_number = 490867715;
            var test_number_string =
"    _  _  _  _  _  _     _ |_||_|| ||_||_   |  |  ||_   | _||_||_||_|  |  |  | _|                           ";
            this.ocr_tool.decode(test_number_string);
            this.ocr_tool.getAccountNumber().should.be.eql(test_number);
        });
    });

    describe("Number parser", function(){
        
    });

});