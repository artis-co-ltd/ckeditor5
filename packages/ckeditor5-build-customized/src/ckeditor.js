/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	SimpleUploadAdapter,
	Autoformat,
	Bold,
	Code,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline,
	FontSize,
	FontColor,
	FontBackgroundColor,
	BlockQuote,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResizeEditing,
	ImageResizeHandles,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	Table,
	TableCaption,
	TableToolbar,
	TextTransformation,
	HorizontalLine,
	Alignment,
	CodeBlock,
	FindAndReplace,
	Highlight,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	PasteFromOffice,
	Heading
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'underline',
			'code',
			'strikethrough',
			'subscript',
			'superscript',
			'removeFormat',
			'highlight',
			'codeBlock',
			'blockQuote',
			'specialCharacters',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'uploadImage',
			'horizontalLine',
			'insertTable',
			'alignment',
			'findAndReplace',
			'heading',
			'|',
			'outdent',
			'indent'
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative'
		],
		insert: {
			type: 'inline'
		}
	},
	table: {
		contentToolbar: [
			'toggleTableCaption',
			'|',
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	alignment: {
		options: ['left', 'center', 'right']
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
