<?php
/**
* phpBB Extension - marttiphpbb Keep Post
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost\migrations;
use marttiphpbb\keeppost\util\cnst;
use marttiphpbb\keeppost\service\store;

class v_0_1_0 extends \phpbb\db\migration\migration
{
	public function update_data()
	{
		$package_json = file_get_contents(__DIR__ . '/../keeppost/package.json');
		$version = json_decode($package_json, true)['version'];

		$data = [
			'version'	=> $version,
		];

		return [
			['config_text.add', [store::KEY, serialize($data)]],			

			['module.add', [
				'acp',
				'ACP_CAT_DOT_MODS',
				cnst::L_ACP,
			]],

			['module.add', [
				'acp',
				cnst::L_ACP,
				[
					'module_basename'	=> '\marttiphpbb\keeppost\acp\main_module',
					'modes'				=> [
						'settings',
					],
				],
			]],
		];
	}
}
