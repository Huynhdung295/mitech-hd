document.addEventListener("DOMContentLoaded", function(){
    let check = 0;
    let heightScreen = screen.height;
    let widthScreen = screen.width;
    
    let question = document.querySelectorAll('li.details__bar .details__bar-question');
    let questionItem = document.querySelectorAll('li.details__bar');

    let paragraph = document.querySelectorAll('.details__paragraph');
    let paragraphContent = document.querySelectorAll('.details__paragraph p');
    let angleShow = document.querySelectorAll('.details__bar-question i.fas');

    for(let i = 0; i < question.length; i++){

        let statePara = 0;
        let save = 0;
        question[i].onclick = function(){
            console.log(statePara);
            for(k = 0; k < questionItem.length; k++){
                questionItem[k].classList.remove('active');
                paragraph[k].classList.remove('show__paragraph');
                angleShow[k].classList.remove('fa-angle-up');
                angleShow[k].classList.add('fa-angle-down');
            }
            questionItem[i].classList.add('active');
            paragraph[i].classList.add('show__paragraph');
            angleShow[i].classList.remove('fa-angle-down');
            angleShow[i].classList.add('fa-angle-up');
        }
    }

    let icon_search = document.querySelectorAll('.fa-search');
    let searchBar = document.querySelector('.wraper .wraper__search');
  
    let searchMin = document.querySelector('.header__menu .header__menu-nav .nav__top .nav__top-search');
    let showMin = document.querySelector('.main__icon .icon__ellip');
    let exit = document.querySelector('.wraper .wraper__search .wraper__search-close');
  
    let openMenu = document.querySelector('.icon__bars');
    let body = document.querySelector('.wraper');
    let layoutBody = document.querySelector('.wraper .wraper__layout');
  
    let closeMenu = document.querySelector('.wraper .wraper__menu .wraper__menu-top .top__close');
    let menuRes = document.querySelector('.wraper .wraper__menu');
  
    let dropdownContentLv2 = document.querySelectorAll('.wraper .wraper__menu ul.wraper__menu-bar li.bar__item  ul.bar__item-dropdown li.dropdown__item ul.dropdown__item-content');
    let showDropLv2 = document.querySelectorAll('.show__lv2');
  
    let showDropdown = document.querySelectorAll('.bar__item-title .show');
    let dropdown = document.querySelectorAll('.wraper .wraper__menu .wraper__menu-bar .bar__item  .bar__item-dropdown');
  
    let dropItem = ['.home', '.company', '.solution', '.element', '.case', '.blog'];
    let menuItemHeight;
    let menuItemLength;
    let menuHeight;
  
    let dropItemLv2 = ['.about', '.slidebar'];
    let menuItemHeightLv2;
    let menuItemLengthLv2;
    let menuHeightLv2;
  
      //  box search
      let boxSearch = {
        run:function(){
            this.show();
            this.hidden();
            this.boxMin();
        },
        show:function(){
            for(let i = 0; i < icon_search.length; i++){
                icon_search[i].onclick = function(){
                    let widthScreen = screen.width;
                    searchBar.classList.add('wraper__display');
                    searchBar.style.width = widthScreen + 'px';
                }
            }
        },
        boxMin:function(){
            showMin.onclick = function(){
                searchMin.classList.toggle('nav__top-show');
            }
        },
        hidden:function(){
            exit.onclick = function(){
                searchBar.classList.remove('wraper__display');
            }
        }
    };
  
      // menu responvie
      let menuResponsive = {
          run:function(){
              this.show();
              this.hidden();
          },
          show:function(){
              openMenu.onclick = function(){   
                  menuRes.classList.add('wraper__show'); //show menu responsive
  
                  layoutBody.classList.add('wraper__display'); // display layout hidden
                  body.classList.add('wraper__transform');    // fixed body
              }
          },
          hidden:function(){          
              closeMenu.onclick = function(){
                  menuRes.classList.remove('wraper__show');
                  layoutBody.classList.remove('wraper__display');
                  body.classList.remove('wraper__transform');
                  body.style.overflow = 'auto';
  
                  for(let k = 0; k < dropdown.length; k++){
                      dropdown[k].classList.remove('bar__item-show');
                      dropdown[k].style.height = '0px';
                      showDropdown[k].classList.add('fa-angle-down');
                      showDropdown[k].classList.remove('fa-angle-up');
                  };
              }
          }
      };
  
      let contentMenuRes = {
          run:function(){
              this.showLv1();
              this.showLv2();
          },
          showLv1:function(){
              for(let i = 0; i < dropdown.length; i++){
                  let state = 0;
  
                  showDropdown[i].onclick = function(){
                      check = i;
  
                      menuHeight = calcMenuHeight(i);
  
                      state++;
                      // nếu state = 1 thì hiển thị nội dung 
                      if(state == 1){
                          for(let k = 0; k < dropdown.length; k++){
                              dropdown[k].classList.remove('bar__item-show');
                              dropdown[k].style.height = '0px';
                              showDropdown[k].classList.add('fa-angle-down');
                              showDropdown[k].classList.remove('fa-angle-up');
                          };
                          dropdown[i].classList.add('bar__item-show');
                          dropdown[i].style.height = menuHeight + 'px';
                          this.classList.remove('fa-angle-down');
                          this.classList.add('fa-angle-up');
                      }
                      // nếu state = 2 thì hiển thị nội dung 
                      if(state == 2){
                          dropdown[i].classList.remove('bar__item-show');
                          dropdown[i].style.height = '0px';
                          menuRes.style.height = heightScreen + 'px';
                          this.classList.add('fa-angle-down');
                          this.classList.remove('fa-angle-up');
                          state = 0;
                      }
                      return false;
                  }
              }
          },
          showLv2:function(){
              for(let i = 0; i < showDropLv2.length; i++){
                  
                  let saveHeight;
                  let state = 0
                  showDropLv2[i].onclick = function(){
  
                      let menuItemLv2 = document.querySelectorAll('.dropdown__item-content' +  dropItemLv2[i] + ' .content__lv2');
  
                      menuItemHeightLv2 = menuItemLv2[0].offsetHeight;
                      menuItemLengthLv2 = menuItemLv2.length;   
                      menuHeightLv2 = menuItemHeightLv2 * menuItemLengthLv2;
  
                      state++;  
                      if(state == 1){
                          dropdownContentLv2[i].classList.add('dropdown__item-lv2');
                          dropdownContentLv2[i].style.height = menuHeightLv2 + 'px';
  
                          menuHeight = calcMenuHeight(check);
                          saveHeight = menuHeight;
  
                          dropdown[check].style.height = menuHeightLv2 + menuHeight + 'px';
                          this.classList.remove('fa-angle-down');
                          this.classList.add('fa-angle-up');
                      }
                      if(state == 2){
                          dropdownContentLv2[i].classList.remove('dropdown__item-lv2');
                          dropdownContentLv2[i].style.height = '0px';
  
                          menuHeight = calcMenuHeight(check);
  
                          dropdown[check].style.height =  saveHeight  + 'px';
                          this.classList.add('fa-angle-down');
                          this.classList.remove('fa-angle-up');;
                          state = 0;
                      }
  
                      return false;
                  }
              }
          }
      };
    
      function calcMenuHeight(item){
          let menuItem = document.querySelectorAll('.bar__item-dropdown' +  dropItem[item] + ' .dropdown__item');
          let height = 0;
          for(let i = 0; i < menuItem.length; i ++){
            menuItemHeight = menuItem[i].offsetHeight;
            height = height + menuItemHeight;
            menuHeight = height;
          }
          return menuHeight;
      }
  
      boxSearch.run();
  
      if(widthScreen < 1200){
          menuResponsive.run();
          contentMenuRes.run();
      }

  }, false)