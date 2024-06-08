# App Flow Ideas

## To Add

- [ ] How we use Babel

## Current Plan

```mermaid
---
title: Key
---
    graph TD
    %% User Inputs
    apiUse[("`
        API
        chosen: true
        used: false
    `")]:::toUse
    apiFind[("`
        API
        chosen: false
        used: false
    `")]:::toFind
    dataFeed(["`
        Data
    `"]):::data
    gmbOne{"`
        Page
    `"}:::page

    %% Create Styles
    classDef toFind stroke:#f00, stroke-width:4px
    classDef toUse stroke:#ff0, stroke-width:4px
    classDef data stroke:#f0f, stroke-width:4px
    classDef page stroke:#0ff, stroke-width:4px
```

```mermaid
---
title: Structure
---
    graph TD
    %% User Inputs
    gmbSubmit{"`Input Form`"}:::page
    dataUser(["`User Inputs`"]):::data
    dataWhere(["`Postcode`"]):::data
    dataWhat(["`Topic`"]):::data

    %% User Inputs --> Expanded Inputs
    apiDic[("`Dictionary API`")]:::toFind
    apiBbl[("`BabelNet`")]:::toUse
    apiCom[("`Electoral Commission`")]:::toUse

    %% Expanded Inputs --> Search Terms
    dataTopic(["`Derived Topics`"]):::data
    dataWho(["`Derived Candidates`"]):::data
    dataTerms(["`All Data`"]):::data

    %% Search Terms --> Results
    apiPar[("`Parliamentary Records`")]:::toUse
    apiNew1[("`News API 1`")]:::toFind
    apiNew2[("`News API 2`")]:::toFind

    %% Results --> Data
    dataVote(["`Voting Results`"]):::data
    dataNews1(["`News 1 Results`"]):::data
    dataNews2(["`News 2 Results`"]):::data
    dataNews(["`News Results`"]):::data
    dataFeed(["`Aggregated Feed`"]):::data

    %% Data --> Output
    gmbAll{Candidate List}:::page
    gmbOne{Individual Candidate Feed}:::page

    %% Flow
    gmbSubmit --> dataUser
    dataUser --> dataWhere & dataWhat
    dataWhere --> apiCom
    dataWhat --> apiDic --> apiBbl
    apiCom --> dataWho
    apiBbl --> dataTopic
    dataWho --> dataTerms & gmbAll
    dataTopic --> dataTerms
    dataTerms --> apiPar & apiNew1 & apiNew2
    apiPar --> dataVote
    apiNew1 --> dataNews1
    apiNew2 --> dataNews2
    dataNews1 & dataNews2 --> dataNews
    dataNews & dataVote --> dataFeed
    dataFeed & gmbAll --> gmbOne

    subgraph user["`
    `"]
        gmbSubmit
        gmbAll
        gmbOne
    end

    %% Create Styles
    classDef toFind stroke:#f00, stroke-width:4px
    classDef toUse stroke:#ff0, stroke-width:4px
    classDef data stroke:#f0f, stroke-width:4px
    classDef page stroke:#0ff, stroke-width:4px
```

## Archive

```mermaid
---
title: Original Concept
---
    graph TD

    subgraph gmb["Got My Back"]
        userIn["Postcode & Topic Input"]
        canList["Candidate List"]
        deedList["Statement Feed"]
    end

    canApi["Candidate API"]
    deedApi["Statement API"]

    userIn --> canList --> deedList

    userIn -.-> canApi & deedApi
    canApi -.-> canList
    canList -.-> deedApi
    deedApi -.-> deedList
```
