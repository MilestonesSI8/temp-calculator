describe('TempService.js', function(){

    it ('Should calculate temp', function() {
        expect(TempService.calcule(50)).toBe(120);
        expect(TempService.calcule(100)).toBe(212);
        expect(TempService.calcule(150)).toBe(302);
        expect(TempService.calcule(200)).toBe(392);
        expect(TempService.calcule(250)).toBe(482);
        expect(TempService.calcule(300)).toBe(572);
    });
});