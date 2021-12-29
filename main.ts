import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import * as d3 from "d3";
// import "d3-graphviz";
import { graphviz } from "d3-graphviz";
const getMethods = (obj) => {
	let properties = new Set()
	let currentObj = obj
	do {
		Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
	} while ((currentObj = Object.getPrototypeOf(currentObj)))
	return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}
export default class DotPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor("dot1", (source, el, ctx) => {
			console.log("---hello there sourcez---");
			console.log(source);
			console.log("---hello there el---");
			console.log(el);
			// d3.select("#div").graphviz().renderDot('digraph  {a -> b}');
			console.log("---hello there---");
			const foo = graphviz("div");
			console.log(foo);
			// console.log(d3);
			// console.log(Object.getOwnPropertyNames(d3));
			// console.log(getMethods(d3));
			// console.log("---hello there foo---");
			// console.log("---hello there d3---");
			// console.log(d3);
			// console.log(Object.getOwnPropertyNames(d3));
			// console.log(getMethods(d3));
			// console.log("---hello there foo---");
			// const foo = d3.select(el);
			// const foo = d3.select("#div");
			// console.log(foo);
			// console.log(Object.getOwnPropertyNames(foo));
			// console.log(getMethods(foo));
			// console.log("---hello there post-foo---");
			// const baz = foo.graphviz().renderDot("digraph  {a -> b}");
			// console.log("---hello there baz---");
			// console.log(baz);
		});
	}

	onunload() {
	}
};
