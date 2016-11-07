var TempService = (function () {

    function calculate(number){
        return number * 1.8 + 32;;
    }

    return {
        "calculate": calculate
    }

})();