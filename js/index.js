// html加载后进行
window.addEventListener('load',function(){
    // 获取搜索框
    var inp = document.querySelector('.input');
    var i = inp.querySelector('Input');
    var se = document.querySelector('.section');
    var fr = se.querySelector('.fr');
    var fl = se.querySelector('.fl');
    var dh = se.querySelector('.dh');
    var d_ul = dh.querySelector('ul');
    var dh_d = se.querySelector('.dh_d');
    var dd_ul = dh_d.querySelector('ul');
    var cr = se.querySelector('.circle');
    var cr_ul = cr.querySelector('ul');
    var se_two = document.querySelector('.section_two');
    var frtwo = se_two.querySelector('.fr');
    var fltwo = se_two.querySelector('.fl');
    var se_two_dd = se_two.querySelector('.section_two_dd');
    var se_two_dd_ul = se_two_dd.querySelector('ul');
    var se_two_cr = se_two.querySelector('.circle');
    var se_two_cr_ul=se_two_cr.querySelector('ul')
    var step = 1200;
    var circle = 0;
    var circle_1 = 0;
    var ch_1 = se_two_dd_ul.offsetWidth/1200;
    var ch = Math.ceil((dd_ul.children.length)/5)
    var num = 0;
    var num_1 = 0;
    i.addEventListener('click',function(){
        this.placeholder = '';
        this.style.color = '#333333';
        this.style.fontSize = 16+'px';
    })
    i.addEventListener('blur',function(){
        if(this.value ==''){
            this.style.fontSize = 14+'px';
            this.placeholder = '搜索音乐、MV、歌单、用户';
        }
    })
    // 歌单点击变色
    d_ul.children[0].className = ' comten';
    for(i = 0; i<d_ul.children.length ; i++){
        dh_d.children[i].style.display = 'none';
    }
    dh_d.children[0].style.display = 'block';
    for(i = 0;i<d_ul.children.length;i++){
        // 给歌单的li添加自定义属性
        d_ul.children[i].setAttribute('ulnumber', i);
        d_ul.children[i].addEventListener('click',function(){
            for(i = 0; i<d_ul.children.length ; i++){
                d_ul.children[i].className = '';
                dh_d.children[i].style.display = 'none';
            }
            var nun = this.getAttribute('ulnumber');
            this.className = 'comten';
            dh_d.children[nun].style.display = 'block';
            circle = 0;
            num = 0;
            for(i = 0;i<cr_ul.children.length; i++){
                cr_ul.children[i].className = '';
            }
            cr_ul.children[circle].className = 'conten';
            for(i = 0; i<d_ul.children.length ; i++){
                remove(dh_d.children[i],-num*step);
                }
        })
    }
    // 左右的箭头显示和隐藏
    se.addEventListener('mouseover',function(){
        fr.style.display = 'block';
        fl.style.display = 'block';
        clearInterval(timer);
    })
    se.addEventListener('mouseout',function(){
        fr.style.display = 'none';
        fl.style.display = 'none';
        timer = setInterval(function(){
            fr.click();
        },2000)
    })
    se_two.addEventListener('mouseover',function(){
        fltwo.style.display = 'block';
        frtwo.style.display = 'block';
    })
    se_two.addEventListener('mouseout',function(){
        frtwo.style.display = 'none';
        fltwo.style.display = 'none';
    })
    for(i = 0; i<ch;i++){
        var li =document.createElement('li');
        // 给li设置自定义属性
        li.setAttribute('index' , i);
        cr_ul.appendChild(li);
        li.addEventListener('click', function(){
            for(i = 0;i<cr_ul.children.length;i++ ){
                cr_ul.children[i].className = '';
            }
            this.className = 'conten';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            for(i = 0; i<d_ul.children.length ; i++){
                remove(dh_d.children[i],-index*step);
                }
        })
    }
    cr_ul.children[0].className = 'conten';
    for(i = 0; i<ch_1;i++){
        var li =document.createElement('li');
        // 给li设置自定义属性
        li.setAttribute('in' , i);
        se_two_cr_ul.appendChild(li);
        li.addEventListener('click', function(){
            for(i = 0;i<se_two_cr_ul.children.length;i++ ){
                se_two_cr_ul.children[i].className = '';
            }
            this.className = 'conten';
            var n = this.getAttribute('in');
                // num = index;
            circle_1 = n;
            for(i = 0; i<se_two_cr_ul.children.length ; i++){
                remove(se_two_dd_ul,-n*step);
                }
        })
    }
    se_two_cr_ul.children[0].className = 'conten';
    fr.addEventListener('click',function(){
        num++;
        circle++;
        if(circle==3){
            circle = 0;
            num = 0;
        }
        for(i = 0; i<d_ul.children.length ; i++){
        remove(dh_d.children[i],-num*step);
        }
        for(i = 0;i<cr_ul.children.length; i++){
            cr_ul.children[i].className = '';
        }
        cr_ul.children[circle].className = 'conten';
    })
    fl.addEventListener('click',function(){
        num--;
        circle--;
        if(circle<0){
            circle = 2;
            num = 2;
        }
        for(i = 0; i<d_ul.children.length ; i++){
            remove(dh_d.children[i],-num*step);
            }
        for(i = 0;i<cr_ul.children.length; i++){
            cr_ul.children[i].className = '';
        }
        cr_ul.children[circle].className = 'conten';
    })
    frtwo.addEventListener('click',function(){
        num_1++;
        circle_1++;
        if(circle_1==2){
            circle_1 = 0;
            num_1 = 0;
        }
        remove(se_two_dd_ul,-num_1*step);
        for(i = 0;i<se_two_cr_ul.children.length; i++){
            se_two_cr_ul.children[i].className = '';
        }
        se_two_cr_ul.children[circle_1].className = 'conten';
    })
    fltwo.addEventListener('click',function(){
        num_1--;
        circle_1--;
        if(circle_1<0){
            circle_1 = 1;
            num_1 = 1;
        }
            remove(se_two_dd_ul,-num_1*step);
        for(i = 0;i<se_two_cr_ul.children.length; i++){
            se_two_cr_ul.children[i].className = '';
        }
        se_two_cr_ul.children[circle_1].className = 'conten';
    })
    var timer = setInterval(function(){
        fr.click();
    },2000)
})
