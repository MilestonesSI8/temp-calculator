describe('TempService.js', function(){
    it 'Should calculate temp', function() {
        expect(TempService.calculate(50)).toBe(122)
    }
}