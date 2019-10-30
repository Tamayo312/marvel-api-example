'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ComicSchema = new Schema ({
    title: String,
    issueNumber: String,
    description: String,
    pages: String,
    img: String,
    leido: Boolean
    /*code: Number,
    status: String,
    copyright: String,
    attributionText: String,
    attributionHTML: String,
    data: {
        offset: Number,
        limit: Number,
        total: Number,
        count: Number,
        results: [
        {
            id: Number,
            digitalId: Number,
            title: String,
            issueNumber: Number,
            variantDescription: String,
            description: String,
            modified: Date,
            isbn: String,
            upc: String,
            diamondCode: String,
            ean: String,
            issn: String,
            format: String,
            pageCount: Number,
            textObjects: [
            {
                type: String,
                language: String,
                text: String
            }
            ],
            resourceURI: String,
            urls: [
            {
                type: String,
                url: String
            }
            ],
            series: {
            resourceURI: String,
            name: String
            },
            variants: [
            {
                resourceURI: String,
                name: String
            }
            ],
            collections: [
            {
                resourceURI: String,
                name: String
            }
            ],
            collectedIssues: [
            {
                resourceURI: String,
                name: String
            }
            ],
            dates: [
            {
                type: String,
                date: Date
            }
            ],
            prices: [
            {
                type: String,
                price: Number
            }
            ],
            thumbnail: {
            path: String,
            extension: String
            },
            images: [
            {
                path: String,
                extension: String
            }
            ],
            creators: {
            available: Number,
            returned: Number,
            collectionURI: String,
            items: [
                {
                resourceURI: String,
                name: String,
                role: String
                }
            ]
            },
            characters: {
            available: Number,
            returned: Number,
            collectionURI: String,
            items: [
                {
                resourceURI: String,
                name: String,
                role: String
                }
            ]
            },
            stories: {
            available: Number,
            returned: Number,
            collectionURI: String,
            items: [
                {
                resourceURI: String,
                name: String,
                type: String
                }
            ]
            },
            events: {
            available: Number,
            returned: Number,
            collectionURI: String,
            items: [
                {
                resourceURI: String,
                name: String
                }
            ]
            }
        }
        ]
    },
    etag: String*/
})

module.exports = mongoose.model('Comic', ComicSchema)