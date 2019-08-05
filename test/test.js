describe('this', function () {
  it('setTimeout', function (done) {
    var obj = {
      say: function () {
        setTimeout(() => {
          // this 是什么？想想为什么？
          // 这里this是指调用say()函数的obj,箭头函数不会对this产生影响
          this.should.equal(obj)
          done()
        }, 0)
      }
    }
    obj.say()
  }) 

  it('global', function () {
    function test() {
      // this 是什么？想想为什么？
      // 这里this指向全局对象；如果是在浏览器中执行，指向window对象
      this.should.equal(global);
    }
    test()
  })

  describe('bind', function () {
    it('bind undefined', function () {
      var obj = {
        say: function () {
          function _say() {
            // this 是什么？想想为什么？
            // 这里不太懂
            this.should.equal(global)
          }
          return _say.bind(obj)
        }()
      };
      obj.say()
    })

    it('bind normal', function () {
      var obj = {};
      obj.say = function () {
        function _say() {
          // this 是什么？想想为什么？
          // 这里不太懂
          this.should.equal(obj)
        }
        return _say.bind(obj)
      }();
      obj.say()
    })
  })
})