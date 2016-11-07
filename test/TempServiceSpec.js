describe('TempService.js', function(){

    it ('Should calculate temp', function() {
        expect(TempService.calcule(50)).toBe(122);
    });
});