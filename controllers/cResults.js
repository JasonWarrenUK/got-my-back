import express from 'express';
import { search } from '../data/params.js';

export function setTerms(req, res) {
    search.postcode = '';
    search.topic = '';
    
    res.render('index', {
        title: 'Got My Back'
    });
}

export function huntList(req, res) {
    search.postcode = req.body.postcode;
    search.topic = req.body.topic;

    res.render('list', {
        title: 'Got My Back',
        postcode: search.postcode,
        topic: search.topic
    });
}

export function displayList(req, res) {
    res.render('list', {
        title: 'Got My Back',
        postcode: search.postcode,
        topic: search.topic
    });
}

export function displayEntry(req, res) {
    res.render('entry', {
        title: 'Got My Back',
        postcode: search.postcode,
        topic: search.topic
    });
}