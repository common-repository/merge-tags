jQuery(document).ready(function(a){var b=window.mergeTagsL10n;a(".actions select").each(function(d){var f=a(this);var c=d?"2":"";var e=a("<span> "+b.to_tag+': <input name="bulk_to_tag'+c+'" type="text" size="20"></span>').css("display","none");f.after(e);f.find("option:first").after('<option value="bulk-merge-tag">'+b.action+"</option>");f.change(function(){if(f.val()=="bulk-merge-tag"){e.css("display","inline").find("input").focus()}else{e.css("display","none")}})})});