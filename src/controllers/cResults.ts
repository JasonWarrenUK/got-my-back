import express, { Request, Response } from 'express';
import { search } from '../data/params.js';

export function setTerms(req: Request, res: Response) {
    search.postcode = '';
    search.topic = '';
    
    res.render('index', {
        title: 'Got My Back'
    });
}

export function huntList(req: Request, res: Response) {
    search.postcode = req.body.postcode;
    search.topic = req.body.topic;

    res.render('list', {
        title: 'Got My Back',
        postcode: search.postcode,
        topic: search.topic
    });
}

export function displayList(req: Request, res: Response) {
    res.render('list', {
        title: 'Got My Back',
        postcode: search.postcode,
        topic: search.topic
    });
}

export function displayEntry(req: Request, res: Response) {
    res.render('entry', {
        title: 'Bill Roger Turnipface',
        postcode: search.postcode,
        topic: search.topic
    });
}