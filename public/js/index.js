
// const jsdom = require("jsdom")
// const { JSDOM } = jsdom
// const { window } = new JSDOM(`<!DOCTYPE html>`)
// const $ = require('jQuery')(window)

const uniqid = require('uniqid')

document.querySelector("#juhi").innerHTML = uniqid()

// $document.ready(function(){
//     document.querySelector("#juhi").innerHTML = uniqid()
//     $('[data-toggle="popover"]').popover();   
//     });
