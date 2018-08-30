describe('Color Clock', () => {
    let clock = document.createElement("div");
    clock.id = 'clock';
    document.body.appendChild(clock);
    const clockElementById = document.querySelector("#clock");
    colorClock();

    it('can display clock', function() {
        this.retries(10);
        assert.isNotNull(clockElementById);
        assert.equal((new Date).toLocaleTimeString(), clockElementById.textContent);
    });

    it('can change background', function() {
        let bodyBgColor = document.body.style.backgroundColor;
        this.retries(10);
        assert.isNotEmpty(bodyBgColor);
        assert.notInclude(['#000000', 'rgb(0, 0, 0)'], bodyBgColor);
        assert.match(bodyBgColor, RegExp('rgb|#'))
    });
    
});
  