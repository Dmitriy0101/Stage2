$(document).ready(function () {
	var $tabs = function (target) {
		var
			_elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
			_eventTabsShow,
			_showTab = function (tabsLinkTarget) {
				var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
				tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
				tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link-js-active');
				tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane-show');
				// если следующая вкладка равна активной, то завершаем работу
				if (tabsLinkTarget === tabsLinkActive) {
					return;
				}
				// удаляем классы у текущих активных элементов
				if (tabsLinkActive !== null) {
					tabsLinkActive.classList.remove('tabs__link-js-active');
				}
				if (tabsPaneShow !== null) {
					tabsPaneShow.classList.remove('tabs__pane-show');
				}
				// добавляем классы к элементам (в завимости от выбранной вкладки)
				tabsLinkTarget.classList.add('tabs__link-js-active');
				tabsPaneTarget.classList.add('tabs__pane-show');
				document.dispatchEvent(_eventTabsShow);
			},
			_switchTabTo = function (tabsLinkIndex) {
				var tabsLinks = _elemTabs.querySelectorAll('.tabs__link-js');
				if (tabsLinks.length > 0) {
					if (tabsLinkIndex > tabsLinks.length) {
						tabsLinkIndex = tabsLinks.length;
					} else if (tabsLinkIndex < 1) {
						tabsLinkIndex = 1;
					}
					_showTab(tabsLinks[tabsLinkIndex - 1]);
				}
			};

		_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

		_elemTabs.addEventListener('click', function (e) {
			var tabsLinkTarget = e.target;
			// завершаем выполнение функции, если кликнули не по ссылке
			if (!tabsLinkTarget.classList.contains('tabs__link-js')) {
				return;
			}
			// отменяем стандартное действие
			e.preventDefault();
			_showTab(tabsLinkTarget);
		});

		return {
			showTab: function (target) {
				_showTab(target);
			},
			switchTabTo: function (index) {
				_switchTabTo(index);
			}
		}

	};

	$tabs('.tabs');



	/*---------НАЧАЛО-----------------СЛАЙДЕР ДЛЯ PRODUCT__ITEM--------------------------------*/
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1330,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			
		]
	});
	/*---------КОНЕЦ-----------------СЛАЙДЕР ДЛЯ PRODUCT__ITEM--------------------------------*/


	/*----------НАЧАЛО----------------СЛАЙДЕР ДЛЯ CARDS---------------------------------------*/
	$('.cards__block').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1450,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1330,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 570,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				}
			},
		]
	});
	/*-------КОНЕЦ-------------------СЛАЙДЕР ДЛЯ CARDS--------------------------------*/


	/*--------------Начало------------Аккордеон--------------------------------*/
	$(document).ready(function () {

		$('.product__panel-heading').click(function () {
			$(this).toggleClass('in').next().slideToggle();
			$('.product__panel-heading').not(this).removeClass('in').next().slideUp();
		});

	});
	/*--------Конец------------------Аккордеон--------------------------------*/


	/*---------Начало-----------Маска для телефона-------------------------*/

	$("#phone").mask("+380(999) 999-99-99");

	/*--------Конец------------Маска для телефона-------------------------*/



});
