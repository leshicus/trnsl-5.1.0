﻿Ext.define('App.view.admin.formuser.FormUserV', {
    extend: 'Ext.form.Panel',
    requires: [
        'App.view.admin.formuser.FormUserC',
        'App.view.common.ResizableComboBoxV',
        'App.view.main.MainM',
        'Ext.form.field.ComboBox'
    ],
    alias: 'widget.formUser',
    viewModel: {type: 'main'},
    controller: 'formuser',
    itemId: 'formUser',
    bodyPadding: 5,
    defaults: {
        labelWidth: 100
    },
    //autoScroll: true,
    border: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    constructor: function () {
        console.log('formUser init');

        this.items = [
            {
                xtype: 'textfield',
                itemId: 'textFamilyname',
                name: 'familyname',
                allowBlank: false,
                fieldLabel: 'Фамилия'
            },
            {
                xtype: 'textfield',
                itemId: 'textFirstname',
                name: 'firstname',
                allowBlank: false,
                fieldLabel: 'Имя'
            },
            {
                xtype: 'textfield',
                itemId: 'textLastname',
                name: 'lastname',
                fieldLabel: 'Отчество'
            },
            {
                xtype: 'combo',
                bind: {
                    store: '{spec}'
                },
                itemId: 'specid',
                queryMode: 'local',
                valueField: 'specid',
                name: 'specid',
                editable: false,
                allowBlank: false,
                displayField: 'specname',
                fieldLabel: 'Специальность',
                /* то, что показывается в списке */
                tpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                    '<div class="x-boundlist-item">{specname} <b>({orgabbr})</b></div>',
                    '</tpl>'
                ),
                /* то, что показывается на форме - титульное значение */
                displayTpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                    '{specname} ({orgabbr})',
                    '</tpl>'
                )
            },
            {
                xtype: 'combobox',
                bind: {
                    store: '{role}'
                },
                itemId: 'comboRole',
                queryMode: 'local',
                valueField: 'id',
                name: 'roleid',
                editable: false,
                allowBlank: false,
                displayField: 'name',
                fieldLabel: 'Роль'
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save',
                glyph: Glyphs.get('save'),
                scale: 'medium'
            },
            '->',
            {
                text: 'Отмена',
                action: 'cancel',
                glyph: Glyphs.get('cancel'),
                scale: 'medium'
            }
        ];

        this.callParent(arguments);
        console.log('formUser end');
    }
});