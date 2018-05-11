<?php
/**
* phpBB Extension - marttiphpbb Keep Post
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost\acp;

use marttiphpbb\keeppost\util\cnst;

class main_module
{
	var $u_action;

	function main($id, $mode)
	{
		global $phpbb_container;

		$request = $phpbb_container->get('request');
		$template = $phpbb_container->get('template');
		$language = $phpbb_container->get('language');

		$load = $phpbb_container->get('marttiphpbb.keeppost.load');
//		$keeppost_config = $phpbb_container->get('marttiphpbb.keeppost.config');

		$phpbb_root_path = $phpbb_container->getParameter('core.root_path');
		$ext_relative_path = 'ext/' . cnst::FOLDER . '/';
		$ext_root_path = $phpbb_root_path . $ext_relative_path;

		$language->add_lang('acp', cnst::FOLDER);
		add_form_key(cnst::FOLDER);

		switch($mode)
		{
			case 'settings':

				$this->tpl_name = 'settings';
				$this->page_title = $language->lang(cnst::L_ACP . '_SETTINGS');

				if ($request->is_set_post('submit'))
				{
					if (!check_form_key(cnst::FOLDER))
					{
						trigger_error('FORM_INVALID');
					}



					trigger_error($language->lang(cnst::L_ACP . '_SETTING_SAVED') . adm_back_link($this->u_action));
				}



				$load->select_mode('javascript');
//				$load->all_modes();
//				$load->all_keymaps();
				$load->all_themes();

	

				$template->assign_var('CONFIG', $config);
	
				break;
		}

		$template->assign_var('U_ACTION', $this->u_action);
	}
}
