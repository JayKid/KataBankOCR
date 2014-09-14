var OCRTool = function() {

    var DIGIT_LENGTH = 3;
    var NUMBER_OF_LINES = 4;
    var INITIAL_POSITION = 0;
    var EMPTY_STRING = "";

    this.account_number = EMPTY_STRING;

    this.getAccountNumber = function()
    {
        return this.account_number;
    }

    this.decode = function(number_string) 
    {
        var number_of_digits = calculateNumberOfDigitsFrom(number_string);
        var digit_index = INITIAL_POSITION;
        while(digit_index < number_of_digits)
        {
            this.extractDigitFrom(number_string,digit_index,number_of_digits);
            ++digit_index;
        }
    }

    // How can I do this next function private (like var function) but being able to access private things (like this.account_number)?
    this.extractDigitFrom = function(number_string,digit_index,number_of_digits)
    {
        var scanned_digit = EMPTY_STRING;
        for(line_number = INITIAL_POSITION; line_number < NUMBER_OF_LINES; ++line_number)
        {
            var string_offset = (DIGIT_LENGTH*digit_index)+(line_number*number_of_digits*DIGIT_LENGTH);
            scanned_digit += number_string.substr(string_offset,DIGIT_LENGTH);
        }
        this.account_number += getDigitFromSymbol(scanned_digit);
    }

    var getDigitFromSymbol = function(symbol)
    {
        var symbol_map = 
        {
            "     |  |   ":"1",
            " _  _||_    ":"2",
            " _  _| _|   ":"3",
            "   |_|  |   ":"4",
            " _ |_  _|   ":"5",
            " _ |_ |_|   ":"6",
            " _   |  |   ":"7",
            " _ |_||_|   ":"8",
            " _ |_| _|   ":"9",
            " _ | ||_|   ":"0"
        };
        return symbol_map[symbol];
    }

    var calculateNumberOfDigitsFrom = function(number_string)
    {
        return (number_string.length / (DIGIT_LENGTH*NUMBER_OF_LINES) );
    }
};

module.exports = OCRTool;