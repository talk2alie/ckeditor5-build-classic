/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Title from '@ckeditor/ckeditor5-heading/src/title';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableProperties,
	TableCellProperties,
	TableToolbar,
	Alignment,
	Autosave,
	Base64UploadAdapter,
	Code,
	CodeBlock,
	FontColor,
	FontSize,
	Highlight,
	FontFamily,
	HorizontalLine,
	ImageResize,
	IndentBlock,
	FontBackgroundColor,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Superscript,
	Subscript,
	TodoList,
	Title,
	Underline
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
