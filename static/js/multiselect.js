(function($, undefined) {
	$(document).click(function(event) {
		var $targ = $(event.target);
		if(!$targ.is('.trigger_multiselect_menu p') && !$targ.hasClass('nocloseonpress')) $('div.trigger_multiselect_menu').removeClass('open');
	});
	
	$.fn.multiselect = function(options) {
		var settings = {'max_checked': null, 'use_filter': false};
		
		return this.each(function() {        
			if(options) { 
				$.extend(settings, options);
			}
			
			var select = $(this);
			var menu = $('<div class="multiselect_menu" />');
			var mtrigger = $('<div class="trigger_multiselect_menu"><p></p></div>');
			var $filters = $('<div class="list_filter"><input type="text" placeholder="Enter keywords" /></div>');
			
			menu.attr('id', 'menu_'+select.attr('id'));
			select.find('option').each(function(i, el) {
				var cbox = $('<input type="checkbox" class="nocloseonpress" />');
				var label = $('<span class="nocloseonpress">'+$(el).text()+'</span>');
				var cboption = $('<div class="nocloseonpress" />');
				cbox.prop('checked', $(el).is(':selected'));
				cboption.append(cbox).append(label);
				menu.append(cboption);
				cbox.change(function() {
					$(el).prop('selected', $(this).is(':checked'));
					mtrigger.children('p').text(menu.find(':checked').size()+' selected');
					if(settings.max_checked && menu.find(':checked').size() >= settings.max_checked) {
						menu.find(':checkbox:not(:checked)').prop('disabled', true);
					} else {
						menu.find(':checkbox:not(:checked)').prop('disabled', false);
					}
				});
			});
			$filters.addClass('nocloseonpress').find('input:text').addClass('nocloseonpress').bind('keyup', function() {
				var txt = $(this).val().toLowerCase();
				var $opts = menu.find('div.nocloseonpress');
				
				if(txt) {
					$opts.hide().filter(function() { return $(this).text().toLowerCase().indexOf(txt) != -1 }).show();
				} else {
					$opts.show();
				}
			});
			mtrigger.insertAfter(select);
			mtrigger.children('p').text(menu.find(':checked').size()+' selected');
			menu.appendTo(mtrigger).width(mtrigger.width());
			mtrigger.children('p').click(function() {
				if(mtrigger.hasClass('open')) {
					mtrigger.removeClass('open');
				} else {
					$('div.trigger_multiselect_menu').removeClass('open');
					mtrigger.addClass('open');
				}
			});
			if(settings.max_checked && menu.find(':checked').size() >= settings.max_checked) {
				menu.find(':checkbox:not(:checked)').prop('disabled', true);
			}
			if(settings.use_filter) {
				menu.addClass('withfilter');
				$filters.prependTo(mtrigger);
			}
			select.wrap('<div style="display: none;" />');
		});
	}
})(jQuery);
