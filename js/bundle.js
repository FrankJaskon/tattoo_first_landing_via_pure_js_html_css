!function(){"use strict";function e(e,t,s,o,i,a){return 0!=e?(a&&a(e-1,e),e--):(a&&a(t.length-1,e),e=t.length-1),n(s,e,o,i),e}function t(e,t,s,o,i,a){return e!=t.length-1?(a&&a(e+1,e),e++):(a&&a(0,e),e=0),n(s,e,o,i),e}function n(e,t,n,s){const o=t*n;if(e.style.transform=`translateX(-${o}px)`,void 0!==s){if(s==t)return;const n=Math.abs(s-t)-1;e.style.transition=1.5+.2*n+"s all"}}function s(e,...t){const n=document.createElement("div");return n.classList.add("modal__window"),t.length&&t.forEach((e=>{n.classList.add(`${e.replace(/\./,"")}`)})),e&&(n.innerHTML=`\n            <div data-${e} class="modal__window_close add__cursor_pointer add__absolute">\n                &times;\n            </div>\n        `),n}function o(e){e.remove()}function i(e,t,n){document.body.append(e),a(e),l(e,`data-${n}`,(()=>o(e))),function(e,t,n){e.addEventListener("click",(e=>{e.target&&e.target.classList.contains(`${t.replace(/\./,"")}`)&&(c(),n())}))}(e,t,(()=>o(e))),r(e)}function a(e){e.classList.add("show","fade0_5s0s"),e.classList.remove("hide"),document.documentElement.style.overflow="hidden"}function l(e,t,n){e.addEventListener("click",(e=>{e.target.hasAttribute(t)&&(c(),n&&n())}))}function r(e){document.addEventListener("keyup",(t=>{"Escape"===t.code&&(o(e),c())}))}function c(){document.documentElement.style.overflow=""}function d(e){e.forEach((e=>{e.addEventListener("click",(()=>{const e=s(!1,".modal");e.innerHTML='\n                <div class="modal__box add__absolute">\n                    <div data-close_modal class="close__modal add__cursor_pointer add__absolute">\n                        &times;\n                    </div>\n                    <div class="modal__wrapper">\n                        <h3 class="modal__title content__title">Мы свяжемся с вами в кратчайшие сроки</h3>\n                        <form id="modal__form">\n                            <div class="input__box padding-top_20px">\n                                <input type="text" name="name" class="input__decoration"\n                                    placeholder="Введи ваше Имя" required>\n                            </div>\n                            <div class="input__box">\n                                <input type="tel" name="phone" class="input__decoration"\n                                    placeholder="Телефон в формате +3(80)" required>\n                            </div>\n                            <button type="submit" class="content__button add__cursor_pointer">\n                                Перезвонить мне\n                            </button>\n                        </form>\n                    </div>\n                </div>\n            ',document.body.append(e),a(e),e.addEventListener("click",(t=>{t.target===e&&(c(),o(e))})),l(e,"data-close_modal",(()=>o(e))),r(e);const t=document.querySelectorAll("form");function n(t){const n=document.querySelector(".modal__box"),s=document.querySelector(".modal");var i;(i=n).classList.remove("show","fade0_5s0s"),i.classList.add("hide");const l=document.createElement("div");l.classList.add("modal__box","add__absolute"),l.innerHTML=`\n                <div data-close_modal class="close__modal add__cursor_pointer add__absolute">\n                    &times;\n                </div>\n                <h3 class="modal__title content__title">${t}</h3>\n                `,s.append(l),setTimeout((()=>{l.remove(),a(n),o(e),c()}),2e3)}t.forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const s=document.createElement("img");s.src="img/icons/spinner.svg",s.style.cssText="\n                        display: block;\n                        margin: 0 auto;\n                        width: 1rem;\n                    ",t.append(s);const o=new FormData(t),i={};o.forEach((function(e,t){i[e]=t})),fetch("server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(i)}).then((e=>{console.log(e),s.remove(),n("Спасибо, что выбираете нас!")})).catch((()=>{n("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}))}))}document.addEventListener("DOMContentLoaded",(()=>{try{!function({container:s,content:o,preview:i,activeClass:a,sliderLeft:l,sliderRight:r,url:c}){const d=document.querySelector(s),_=document.querySelector(o),m=window.getComputedStyle(_).width.replace(/px|em|rm/,""),u=document.querySelector(i);axios.get(c,{mode:"cors"}).then((s=>{_.style.width=100*s.data.length+"%",_.classList.add("add__flex"),d.style.overflow="hidden";let o=0;s.data.forEach((({img:e,altimg:t})=>{_.innerHTML+=`\n                <div class="gallary__wrap_img">\n                    <img src="${e}" alt="${t}">\n                </div>\n            `,u.innerHTML+=`\n                <div class="gallary__wrap_preview_img">\n                    <img src="${e.replace(/\./,"-mini.")}" alt="${t}-mini" id="${"prevImg"+o++}">\n                </div>\n            `}));let i=0;!function(s){const o=document.querySelectorAll(".gallary__wrap_preview_img > img");let c=setTimeout((function e(){s=t(s,o,_,m,i,d),i=s,c=setTimeout(e,7e3)}),7e3);function d(e,t){o[t].parentElement.classList.remove(a.replace(/\./,"")),o[e].parentElement.classList.add(a.replace(/\./,""))}function p(e){n(_,e,m,i),d(e,i),i=e}window.addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&clearTimeout(c)})),p(s),u.addEventListener("click",(e=>{const t=e.target;if(t&&t.parentElement.classList.contains("gallary__wrap_preview_img")){const e=+t.getAttribute("id").slice(7);clearTimeout(c),p(s=e)}}));const f=document.querySelector(l),y=document.querySelector(r);f.addEventListener("click",(()=>{clearTimeout(c),s=e(s,o,_,m,i,d),i=s})),y.addEventListener("click",(()=>{clearTimeout(c),s=t(s,o,_,m,i,d),i=s}))}(i)}))}({container:".intro__gallery",content:".wrapper__view_img",preview:".wrapper__preview_imges",activeClass:".active__prev_img",sliderLeft:".intro__gallery_slider_left",sliderRight:".intro__gallery_slider_right",url:"https://my-json-server.typicode.com/FrankJaskon/tattoo_first_landing_via_pure_js_html_css/introGallary"})}catch(e){console.log(e)}try{!function({container:e,contentContainer:t,descriptionContainer:n,tabsListContainer:s,tabsName:o}){const i=document.querySelector(e),a=Array.from(i.querySelectorAll(t)),l=document.querySelectorAll(n),r=document.querySelector(s),c=document.querySelectorAll(o);let d,_;function m(e=0){d=0,_=a.concat(a.slice(0,e)),_.splice(0,e),_.forEach(((e,t)=>{e.classList.add("add__absolute"),c[t].classList.remove("active"),l[t]&&(l[t].classList.remove("fade"),l[t].style.opacity=0),e.style.cssText=`\n          transition: 1s all;\n          top: ${d/4}px;\n          left: -${d}px;\n\n          z-index: -${d};\n          opacity: ${1-d/50};\n        `,d+=40})),_[0].style.opacity=1,c[e].classList.remove("active")}function u(e=0){c[e].classList.add("active"),l[e].classList.add("fade")}m(),u(),r.addEventListener("click",(e=>{const t=e.target;t&&t.classList.contains(o.replace(/\./,""))&&c.forEach(((e,n)=>{e==t&&(m(n),u(n))}))})),function(){let e;setTimeout((()=>{e=document.querySelectorAll(".card__item_title"),e.forEach((e=>{e.addEventListener("click",(e=>{c.forEach(((t,n)=>{e.target.innerHTML===t.innerHTML&&(m(n),u(n),i.scrollIntoView({behavior:"smooth",block:"end"}))}))}))}))}),1e3)}()}({container:".tabs__main_wrapper",contentContainer:".tabs__content",descriptionContainer:".transparent__box",tabsListContainer:".tabs__ul_wrapper",tabsName:".tabs_item"})}catch(e){console.log(e)}try{!function({container:s,boxForCards:o,containerForThreeCards:i,slidersSelector:a,sliderLeft:l,sliderRight:r,url:c}){const d=document.querySelector(o);class _{constructor(e,t,n,s,o,i,a,...l){this.nameOfCard=n,this.altimg=t,this.content=s,this.price=i,this.img=e,this.classes=l,this.checkingImgOrder=o,this.orderNum=a}render(){const e=document.createElement("div");"right"===this.checkingImgOrder||"left"===this.checkingImgOrder?e.style.cssText="\n                        width: 470px;\n                        display: flex;\n                        flex-direction: row;\n                    ":"top"!==this.checkingImgOrder&&"bottom"!==this.checkingImgOrder||(e.style.cssText="\n                        width: 270px;\n                    ",e.classList.add("card-vertical")),"right"===this.checkingImgOrder||"bottom"===this.checkingImgOrder?this.checkingImgOrder="inversion__order-item":this.checkingImgOrder="",e.innerHTML=`\n                    <div class="card__img ${this.checkingImgOrder}">\n                        <img src="${this.img}" alt="${this.altimg}">\n                    </div>\n                    <div class="card__content_wrapper">\n                        <h3 class="card__item_title add__cursor_pointer">${this.nameOfCard}</h3>\n                        <div class="card__item_descr">\n                            ${this.content}\n                        </div>\n                        <div class="card__item_divider"></div>\n                        <div class="card__item_price_wrap">\n                            <div class="card__item_price_name">\n                                Цена:\n                            </div>\n                            <div class="card__item_price_total">\n                                <span class="brown__span">от ${this.price}</span> грн\n                            </div>\n                        </div>\n                    </div>`,0===this.classes.length&&(this.classes[0]="box__price_card"),this.classes.forEach((t=>{e.classList.add(t)}));{const t=d.querySelectorAll(i);for(let n=0;n<t.length;n++)if(3!=t[n].querySelectorAll(".box__price_card").length){t[n].append(e);break}}}}axios.get(c,{mode:"cors"}).then((e=>{const t=Math.ceil(e.data.length/3);for(let e=0;e<t;e++){const e=document.createElement("div");e.classList.add(i.replace(/\./,"")),d.append(e)}d.style.width=window.getComputedStyle(d.querySelector(i)).width.replace(/px||em||rm/,"")*t,d.style.transition="1.5s all",e.data.forEach((({img:e,altimg:t,title:n,descr:s,imgpos:o,price:i,orderNum:a})=>{new _(e,t,n,s,o,i,a).render()}))})).then((()=>{!function(){const c=document.querySelector(s),d=document.querySelector(o),_=document.querySelector(l),m=document.querySelector(r),u=document.querySelectorAll(i),p=window.getComputedStyle(u[0]).width.replace(/px|em|rm/,"");if(u.length>1&&u){_.style.transition="1s all",m.style.transition="1s all";let s=0;n(d,s,p),c.addEventListener("mousedown",(n=>{n.target&&n.target.parentElement.classList.contains(a.replace(/\./,""))&&(s=n.target.parentElement.classList.contains(l.replace(/\./,""))?e(s,u,d,p):t(s,u,d,p))}))}else _.style.visibility="hidden",m.style.visibility="hidden"}()}))}({container:".cards__wrapper",boxForCards:".cards__additional_wrapper",containerForThreeCards:".inner__box",sliderLeft:".slider__left",sliderRight:".slider__right",url:"https://my-json-server.typicode.com/FrankJaskon/tattoo_first_landing_via_pure_js_html_css/menu",slidersSelector:"cards__sliders"})}catch(e){console.log(e)}try{!function(){const e=document.querySelectorAll("[data-show_modal]");d(document.querySelectorAll(".text__button")),d(e)}()}catch(e){console.log(e)}try{!function(){new Date("2022-04-01");const e=document.querySelector(".footer"),t=window.getComputedStyle(e).height;document.querySelector(".action__section").style.marginBottom=t}()}catch(e){console.log(e)}try{!function(){document.querySelector(".staff__section");const e=document.querySelector(".staff__main_wrapper"),t=document.querySelectorAll(".staff__person_wrapper");function n(e){e.forEach((e=>{e.style.position="absolute",e.style.visibility="hidden",e.style.display="none"}))}document.querySelectorAll(".staff__img_wrap"),document.querySelectorAll(".staff__img"),document.querySelectorAll(".staff__person_descrition_wrap"),document.querySelectorAll(".staff__person_descrition"),document.querySelector(".staff__person_modal"),n(t),function(){const o=document.querySelector(".intro__person_wrapper"),a=document.querySelector(".intro__description_wrapper"),l=document.querySelector(".staff__section_header");let r=!1,c=!0;new IntersectionObserver((function(e){e.forEach((e=>{e.intersectionRatio<=0||(e.isIntersecting&&c?(c=!1,o.style.visibility="visible",a.style.visibility="visible",l.style.visibility="visible",e.target.append(o,a)):r&&(n(t),o.style.display="block",a.style.display="block"))}))}),{threshold:.5,rootMargin:"60% 0px 60% 0px"}).observe(e),e.addEventListener("click",(e=>{const n=e.target;if(n&&(n.classList.contains("intro__button")||n.classList.contains("intro__img")))o.style.display="none",a.style.display="none",t.forEach(((e,t)=>{e.style.position="static",e.style.visibility="visible",e.style.display="block",e.style.animation=t%2!=0?`slideLeftAppearence 1.${t}s`:`slideRightAppearence 1.${t}s`})),r=!0;else{if(!n||!n.classList.contains("staff__img"))return;l=n.id,axios.get("https://my-json-server.typicode.com/FrankJaskon/tattoo_first_landing_via_pure_js_html_css/staff",{mode:"cors"}).then((e=>{e.data.forEach((e=>{if(e.nameEng.toLowerCase()==l.toLowerCase()){const t=s("close_staff_modal","staff__person_modal");t.innerHTML+=`\n                            <div class="staff__person_modal_wrapper">\n                                <div data-close_staff_modal class="staff__person_modal_close add__cursor_pointer add__absolute">\n                                    &times;\n                                </div>\n                                <div class="staff__person_modal_content_wrap">\n                                    <h3 class="content__title">\n                                        <span class="title">${e.nameRus}</span>\n                                    </h3>\n                                    <p class="content__text">\n                                        ${e.description}\n                                    </p>\n                                    <div class="content__button staff__person_button">\n                                        <button data-${e.nameEng}_writing type="none"\n                                                class="add__cursor_pointer text_button">\n                                            Записаться к мастеру\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class="staff__person_modal_img_wrap">\n                                    <img src=${e.img} alt="${e.altImg}" class="staff__modal_img cover">\n                                </div>\n                            </div>\n                        `,document.body.append(t),i(t,".staff__person_modal_wrapper","close_staff_modal"),d(document.querySelectorAll(".text_button"))}}))}))}var l}))}()}()}catch(e){console.log(e)}try{!function(){document.querySelector(".top__panel "),document.querySelector(".header__nav"),document.querySelectorAll(".nav__item"),document.querySelector(".main__header "),document.querySelector(".intro__gallery"),document.querySelector(".top__panel_right");const e=document.querySelector(".header__before_scrolling"),t=document.querySelector(".header__after_scrolling"),n=(document.querySelector(".wrapper__preview_imges"),document.querySelector("header")),o=document.querySelectorAll(".main__btn"),a=document.querySelectorAll(".staff__btn"),l=document.querySelector(".staff__section");function r(e){e.classList.add("visibility__hidden"),e.style.display="none"}function c(e){e.classList.remove("visibility__hidden"),e.style.display="block"}var d,_;document.querySelectorAll(".nav__item_link"),r(t),setInterval((d=function(){document.documentElement.scrollTop>100&&document.documentElement.scrollTop<10||window.addEventListener("scroll",(function(){document.documentElement.scrollTop>50?m&&!u&&f():!m&&u&&p()}))},_=!1,function(){_||(d.apply(this,arguments),_=!0,setTimeout((function(){_=!1}),500))}),500);let m=!0,u=!1;function p(){r(t),t.classList.remove("fade0_5s0s"),c(e),n.style.marginTop="0",u=!1,m=!0}function f(){r(e),c(t),t.classList.add("fade0_5s0s"),n.style.marginTop="50px",m=!1,u=!0}function y(e,t){e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"})}))}))}function h(e){const t=s("close_gallary_modal",".gallary__modal"),n=document.createElement("div"),o=document.createElement("div");n.classList.add("additional__gallary_content_wrap"),n.append(o),o.classList.add("gallary__content_main_wrap"),axios.get(e,{mode:"cors"}).then((e=>{e.data.forEach((({img:e,altImg:t})=>{o.innerHTML+=`\n                <div class="gallary__photo_box add__cursor_pointer">\n                    <img src="/img/icons/zoom-img.png"\n                         class="gallary__zoom_img contain add__absolute visibility__hidden">\n                    <img src=${e} alt="${t}" class="gallary__img cover">\n                </div>\n                `}))})).then((()=>{t.append(n),i(t,"additional__gallary_content_wrap","close_gallary_modal"),function(){const e=document.querySelectorAll(".gallary__photo_box"),t=document.querySelectorAll(".gallary__img");e.forEach(((e,n)=>{e.addEventListener("click",(()=>{const o=s();o.innerHTML=`\n                    <div class="gallary__viewing_photo_box add__cursor_pointer fade0_5s0s">\n                        <img src=${t[n].getAttribute("src")} alt="${t[n].getAttribute("altImg")}"\n                             class="gallary__viewing_img contain">\n                    </div>\n                `,e.parentElement.append(o),o.addEventListener("click",(()=>{o.remove()}))}))}))}()}))}document.documentElement.scrollTop>300?f():p(),y(o,n),y(a,l),document.querySelectorAll(".gallary__btn").forEach((e=>{e.addEventListener("click",(e=>{if(e.preventDefault(),e.target.classList.contains("gallary__workings_btn"))h("https://my-json-server.typicode.com/FrankJaskon/tattoo_first_landing_via_pure_js_html_css/workings");else if(e.target.classList.contains("gallary__sketches_btn"))h("https://my-json-server.typicode.com/FrankJaskon/tattoo_first_landing_via_pure_js_html_css/sketches");else{if(!e.target.classList.contains("gallary__meetings_btn"))return;h("https://my-json-server.typicode.com/FrankJaskon/tattoo_first_landing_via_pure_js_html_css/events")}}))})),document.querySelectorAll(".about__btn").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=s("close_about_modal");t.innerHTML+='\n                <div class="about__content_wrapper">\n                    <h3 class="about__title content__title">О нас</h3>\n                    <div class="about__img_wrapper">\n                        <img src="img/contant/about/our-place.jpg" alt="our place" class="about__img cover">\n                    </div>\n                    <p class="content__text about__content__text">\n                        <span class="title">heart for art</span>\n                        в индустрии татуировок достаточно продолжительное время,\n                        мастера своего дела собрались вместе, чтобы создать лучший тату салон в Мариуполе.\n                        <br>\n                        О профессионализме мастеров  тату салона говорят заслуги нашей команды на  европейской арене.\n                        Без сомнений, мы справимся с работами любой сложности,\n                        поможем с выбором эскиза и цветового решения. Будьте уверены, результат Вас не разочарует!\n                        <br>\n                        Наш приоритет – это забота о вашем комфорте. Именно поэтому мы выбрали максимально удобное\n                        расположение нашего тату салона.\n                        <br>\n                        Эргономичные раздвижные кушетки, профессиональное оборудование,  с\n                        амые высококачественные краски – компромиссам здесь не место.\n                        <br>\n                        Перекрытие старых татуировок и шрамов, удаление татуировок лазером –\n                        мы предоставляем полный спектр услуг в данной сфере.\n                        <br>\n                        Если стильная и качественная татуировка Ваш выбор,\n                        тату салон <span class="title">heart for art</span> ждет Вас.\n                    </p>\n                </div>\n            ',i(t,"about__content_wrapper","close_about_modal")}))})),document.querySelectorAll(".faq__btn").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=s("close_faq_modal");t.innerHTML+='\n                <div class="faq__content_wrapper">\n                    <h3 class="faq__title content__title">Хочется татуировку?</h3>\n                    <div class="content__text">\n                        <p class="preview">\n                            Украшать свое тело рисунками\n                            или надписями было и будет модно.\n                            Главное – выбрать правильное тату, которое не только будет нести смысловую нагрузку,\n                            но и выделится красотой исполнения.\n                            Для талантливого мастера – это вполне выполнимая задача.\n                        </p>\n                        <dl>\n                            <dt>\n                                <h3 class="faq__title content__title">ДЕЛАЕМ ТАТУИРОВКУ: КАК ЭТО ПРОИСХОДИТ?</h3>\n                            </dt>\n                            <dd>\n                                <ul>\n                                    <li>\n                                        Первый важный шаг на пути к получению действительно крутой татуировки\n                                        заключается в выборе рисунка, с опорой на его значение. Например, очень популярна\n                                        среди девушек бабочка, которая воплощает символ перерождения, нового начинания и\n                                        попросту является символом свободы и неземной красоты.\n                                    </li>\n                                    <li>\n                                        Второй шаг – определиться со стилем татуировки, ведь та же бабочка может быть\n                                        выполненной в разных направлениях.\n                                    </li>\n\n                                    <li>\n                                        Третий шаг – подготовка эскиза и выбор профессионального мастера.\n                                        Лучше заниматься эскизом вместе с мастером,\n                                        чтобы он имел точное представление о желании клиента.\n                                    </li>\n                                </ul>\n                            </dd>\n                        </dl>\n                        <dl>\n                            <dt>\n                                <h3 class="faq__title content__title">КАКИЕ БЫВАЮТ <span>СТИЛИ</span> ТАТУИРОВОК?</h3\n                            </dt>\n                            <dd>\n                                <p>\n                                    Сейчас татуировка носит, прежде всего, декоративный характер,\n                                    поэтому и стили тату так часто смешиваются между собой.\n                                    Тем не менее, принято выделять основные, «чистые» стили рисунков на коже.\n                                </p>\n                            </dd>\n                        </dl>\n                        <dl>\n                            <dt>\n                                <h3 class="faq__title content__title">ЭТНИЧЕСКИЙ СТИЛЬ</h3>\n                            </dt>\n\n                            <dd>\n                                <p>\n                                    Этнический стиль татуировок – самый распространенный,\n                                    поскольку он объединяет несколько направлений.\n                                    Это всевозможные изображения, собранные с истории разных народов.\n                                    Так, к этно-татуировкам относится:\n                                </p>\n                                <p>\n                                    кельтский стиль, который ярко узнаваем своей характерной «плетенкой»\n                                    – орнаментом с выразительными узлами;\n                                    индейские мотивы, среди которых особо выделяются тату в стиле майя и ацтеков;\n                                    тату в стиле олд-скул вернула популярность, сегодня такие рисунки можно наблюдать\n                                    на теле представителей всех слоев населения;\n                                    восточный стиль идеально подходит для выражения силы, преданности,\n                                    чувств или своего мировоззрения. Чаще всего клиенты тату-салона хотят китайские,\n                                    японские или индийские восточные символы на коже. Не теряют актуальности иероглифы\n                                    – красивые и оригинальные одновременно;\n                                    полинезийский – это стиль тату, которому характерны изображения с волнами, лентами,\n                                    спиральными узорами и линиями, расходящимися лучами;\n                                    скифский богат разными приемами оформления, звериными мотивами;\n                                    стиль трайбл тоже относится к этно-тату.\n                                </p>\n                                <h3 class="faq__title content__title">Другие стили татуировок, популярные сейчас:</h3>\n                                <ul class="faq__styles_list">\n                                    <li>стиль фэнтези</li>\n                                    <li>анималистический</li>\n                                    <li>растительный</li>\n                                    <li>славянский</li>\n                                    <li>кибернетический</li>\n                                    <li>Black & Grey</li>\n                                    <li>дотворк</li>\n                                    <li>Blackwork-tattoo</li>\n                                </ul>\n                            </dd>\n                        </dl>\n                        <dl>\n                            <dt>\n                            <h3 class="faq__title content__title">КАК ВЫБРАТЬ «СВОЮ» ТАТУИРОВКУ?</h3>\n                            </dt>\n                            <dd>\n                                <p>\n                                    Стилей действительно очень много, и в каждом из них кроются тысячи рисунков,\n                                    узоров и орнаментов – можно запутаться в своих желаниях.\n                                    Вот несколько советов, которые помогут с выбором:\n                                </p>\n                                <p>\n                                    Не нужно копировать чью-то татуировку, пусть даже красивую – будьте уникальны!\n                                    Изучайте портфолио мастеров – возможно, какая-то из работ\n                                    покажется вам близкой по духу. Не думайте о том, какие тату в моде, ориентируйтесь\n                                    на свои ощущения, ведь с рисунком на коже придется сродниться на всю жизнь.\n                                    Помните, что тату – это больше, чем просто тушь под кожей.\n                                    Мы делаем их с желанием отобразить сокровенную частицу внутреннего мира.\n                                    Обязательно выбирайте мастера-профессионала,\n                                    который воплотит в жизнь любые ваши фантазии.\n                                </p>\n                            </dd>\n                        </dl>\n                    </div>\n                </div>\n            ',i(t,"faq__content_wrapper","close_faq_modal")}))}))}()}catch(e){console.log(e)}}))}();
//# sourceMappingURL=bundle.js.map