---
title: "Textbooks, tutorials and tool chests: different ways to learn from notebooks - Part 2"
date: "2022-07-27T16:20:35+10:00"
draft: false
tags: ['Jupyter', 'notebooks', 'text analysis']
topics: ['Data Use Principles']
author: "Joel Nothman"
---
# Textbooks, tutorials and tool chests: different ways to learn from notebooks - Part 2
### More genres of notebooks and what it all means for ATAP

### Written by Joel Nothman
#### This work was supported by the [Sydney Informatics Hub](https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html), a Core Research Facility of the University of Sydney

[Part 1](/posts/notebooks-part-1) of this post introduced notebooks in general and identified various broad genres of notebook which have been used in providing text analytic tools. That part looked at notebooks as tutorials and the grouping of such materials into courses or textbooks. In this part, we look at notebooks which introduce individual tools and notebooks which present research results. The post ends with a consideration of how our analysis of different genres of notebook might influence the design of ATAP.

### Libraries and tool chests

A “course” comes with a sense of order and completeness; a “tutorial” with a sense of guidance and demonstration. Some notebook collections appear more designed for reference or application than teaching, as if each notebook was a tool you could take from a chest and utilise for your needs.

<table>
<tr><td><b>Genre</b></td><td>TOOLKIT</td></tr>
<tr><td><b>Typical Structure</b></td><td>(Idealised! There are few examples of this done thoroughly.)<ul><li>Pointers to background reading</li>
<li>How to load data</li>
<li>How to set parameters</li>
<li>Apply method</li>
<li>Validate results</li>
<li>Questions to consider</li>
<li>Analyse results</li>
<li>Save output</li></ul>

</td></tr>
<tr><td><b>Strengths</b></td><td>Oriented around decision making, critical application, multiple pathways or uses, and iterative improvement of methods.

Meaningful scope for each notebook.
</td></tr>
<tr><td><b>Weaknesses</b></td><td>Some processing steps will be optional, notebooks are not very suitable for.</td></tr>
<tr><td><b>Example</b></td><td><a href='https://nbviewer.org/github/GLAM-Workbench/pm-transcripts/blob/master/harvest_transcripts.ipynb'>GLAM Workbench - Harvest Transcripts</a></td></tr>
</table>

A notable collection in this space is Tim Sherratt’s [GLAM Workbench](https://glam-workbench.net/). Tim often titles a directory of notebooks as “tools, tips and examples”, which nicely summarises the mix of content that users can retrieve from the Workbench. “Tools” might include a [notebook for acquiring Australian parliament’s Hansard transcripts](https://nbviewer.org/github/GLAM-Workbench/australian-commonwealth-hansard/blob/master/Harvesting-Commonwealth-Hansard.ipynb), offering parameters that the user might change for their own project; or an [app that summarises query results](https://github.com/GLAM-Workbench/trove-newspapers/blob/master/querypic.ipynb) from the National Library of Australia’s [Trove](https://trove.nla.gov.au/). An app, here, is distinguished by providing interactive widgets within a notebook, rather than expecting the user to set parameters in code and hit “run”. “Examples” includes a [case study](https://nbviewer.org/github/GLAM-Workbench/ozglam-workbench-naa-wap/blob/master/RecordSearch/2.%20Analyse%20a%20series.ipynb) of filtering a corpus by its metadata, while a [walkthrough on language detection](https://github.com/GLAM-Workbench/trove-newspapers/blob/master/find-non-english-newspapers.ipynb) applied to Trove incorporates many “tips” which help to identify the author’s thinking as his code takes each turn. Case studies like these lie on a spectrum between the genericity of tutorials often applied to demonstration or toy data, and the hypothesis-driven specificity of a research article. Grounding a topic in research use cases may help to evoke a sense of relevance to the user.

<table>
<tr><td><b>Genre</b></td><td>APP</td></tr>
<tr><td><b>Typical Structure</b></td><td><ul><li>Enter parameters / upload data</li>
<li>See analysis</li>
<li>Interact</li>
</td></tr>
<tr><td><b>Strengths</b></td><td>User friendly way to analyse text.

Notebooks enable rapid development of tools.

</td></tr>
<tr><td><b>Weaknesses</b></td><td>Discourages understanding of the internal workings. Comes with similar constraints as desktop tools, including limited reproducibility.</td></tr>
<tr><td><b>Example</b></td><td><a href='https://github.com/GLAM-Workbench/trove-newspapers/blob/master/querypic.ipynb'>Visualise searches in Trove's newspapers and gazettes</a></td></tr>
</table>

Notebooks presented as reusable tools may also be very similar to tutorials. Until recently, Ithaka’s [Constellate.org](https://constellate.org/) – a core part of TAPI – included tutorial notebooks, and corresponding editions of the same notebook “for research”. (Here’s a [tutorial](https://github.com/ithaka/tdm-notebooks/blob/ea3c48e0094303a7d40dec4890c6cfdca275d22b/finding-significant-terms.ipynb) and [research](https://github.com/ithaka/tdm-notebooks/blob/ea3c48e0094303a7d40dec4890c6cfdca275d22b/finding-significant-terms-for-research.ipynb) pair on finding key terms in a corpus.) Each “research” notebook omits some of the guidance included in the tutorial, and was rather intended to be applied to a user-supplied dataset. The removal of these applied notebooks notwithstanding, it appears that the Constellate tutorials should dually function as reusable tools. The Constellate platform allows the user to create a corpus from JSTOR content, and select a tutorial/tool notebook from their collection, which is then applied to the new corpus. An important usability feature of reusable tools, and tutorials with this capability, is how they guide or support the user to apply the notebook to their own data.

Although targeting experienced corporate data scientists, rather than HASS researchers, data infrastructure provider Databricks openly publishes another relevant tool chest of notebooks (albeit not designed for the Jupyter platform). Their [Solution Accelerators](https://databricks.com/solutions/accelerators) are designed to support a fairly code-savvy analyst in tackling standard data science problems in industry. (Read “Solution Accelerator” as a less patronising, more businessy, revamp of the term “starter kit”.) A Solution Accelerator notebook mixes narrative and code, inviting the user to bring their own data. It may give them data transformation code, models to apply, questions to ask, and diagnostics to perform. The library of Solution Accelerators shows how even a capable user may appreciate a notebook as a launchpad when working with new techniques. The apparent value of Solution Accelerators to Databricks customers highlights the risk and cost of undertaking analysis without workflow guidance from a notebook.

Unlike tutorials, a notebook tool chest does not make great efforts to build up a user’s skills from scratch, but supports them in selecting a tool that might be appropriate, seeing its relevance, and applying it to their needs.

### Journals and Anthologies

Through their mix of code, narrative and generated tables and figures, notebooks are a powerful tool for presenting reproducible experimental results. A research paper implemented as a notebook may be rebuilt from its code, reproducing tables, figures and examples as the researcher modifies it. An article-as-notebook is distinguished by its focus on a specific research question, and application of whichever tools are appropriate to draw reliable conclusions. Although individual humanities researchers using digital methods might publish their research as code notebooks (see Quinn Dombrowski’s [list](https://github.com/quinnanya/dh-jupyter#research--projects) for instance), institutional or discipline-specific collections of research notebooks are not yet common in applied text analysis and HASS. For comparison, a move towards reproducibility in other sciences allows one to find a multitude of research notebooks in venues like [paperswithcode.com](https://paperswithcode.com/) and [Code Ocean](https://codeocean.com/explore/capsules).

<table>
<tr><td><b>Genre</b></td><td>RESEARCH EXPERIMENT</td></tr>
<tr><td><b>Typical Structure</b></td><td><ul><li>Introduction</li>
<li>Preparation</li>
<li>Repeat for each tool or step:

Modelling, Analysis, Interpretation</li>
<li>Discussion</li></ul>

</td></tr>
<tr><td><b>Strengths</b></td><td>Demonstrates application of tools to answer a question.

Demonstrates combination of tools.

Encourages reuse, reproducibility and open science.
</td></tr>
<tr><td><b>Weaknesses</b></td><td>May not support the reader to adopt the techniques.</td></tr>
<tr><td><b>Example</b></td><td><a href='https://journalofdigitalhistory.org/en/article/4yxHGiqXYRbX'>Topic Specific Corpus Building</a></td></tr>
</table>

When driven by a research question, the notebook author is less interested in demonstrating what techniques are *available* to apply, and more selective in using techniques that may helpfully harness their data towards a specific goal or narrative. The research thesis thus provides a way to specifically evaluate the output of an analysis: does it support a hypothesis? does it induce a new hypothesis? does it suggest problems in the modelling? The final research notebook may hide aspects of this iterative experimentation, evaluation, and the response of further investigation, issue mitigation, or discarding a path of investigation. (The ideal reproducible research notebook would keep track of dead ends too!)
Tutorials and tools may emulate these processes of iterative development, or provide a range of possible pathways for analysis; the research notebook, however, must keep its focus on the thesis being explored.

The [Journal of Digital History](https://journalofdigitalhistory.org/) is a new player in this space, releasing its first issue in October 2021. This project of the Luxembourg Centre for Contemporary and Digital History and De Gruyter ensures some reproducibility by requiring the code which constructs the research article to be executable and its data available to reproduce tables and figures, while allowing the reader to evaluate and reuse the research implementation. It goes further in harnessing the notebook medium to add layers of depth to peer-reviewed publications in digital history: viewing a JDH publication, a reader is able to hide what they call the “hermeneutic layer” of the work, which provides methodological detail, as distinct from the narrative arc of the research. The notebook medium applied in this way is able to shift several paradigms about how research is constructed, presented, and accessed.

### Bringing it back to users

In positioning the Australian Text Analytics Platform’s role amidst ongoing and past resource creation, we have to consider how our library of notebooks might build outcomes for our users. Here are some outcomes we are considering.

#### Reference and Application
- User has access to starters’ kits for a wide range of techniques, covering data modelling, validation and analysis, archiving, etc.
- User can experiment with standard tools applied to demo data or their own.
- User can adapt code notebooks to their own use cases.
- User is able to compare alternative methods for similar goals.

#### Growth and Learning
- User is familiar with what selected research methods look like as code.
- User is familiar with what end-to-end research looks like as code.
- User can prepare their own data for existing or standard tools.
- User understands how their research problem might translate to a computational problem, and the applicable techniques.
- User is able to combine multiple techniques to achieve their research goals.
- User understands how to build good research software.
- User can confidently build a notebook from scratch for their own research.

We also need to define who our user personas are: is it someone with academic expertise, but little in code? or someone with moderate code literacy, but stuck with how to create notebooks for reproducible research? The latter might be more interested in published starter kits, case studies and experiments, while the former needs the guidance provided by a tutorial.

### Where to from here?

By surveying several collections of notebooks for text analytics, we have a stronger understanding of the spectrum of materials ATAP’s library can incorporate, both in content and in genre.

One apparent opportunity is to curate or improve a catalogue of existing resources that will meet the needs of the Australian text analytics research community. It’s also possible to see areas where existing resources may fail to meet the needs of current users of desktop and web tools for corpus analysis from [Voyant Tools](https://voyant-tools.org/) to [AntConc](https://www.laurenceanthony.net/software/antconc/); those tools provide interactivity that carries the user across views of statistics, query matches and texts, but tend to be limited in facilitated reproducible research and in extensibility to arbitrary corpus cleaning and analysis procedures. Tying the resources we’ve looked at to user outcomes also gives a better understanding how to evaluate accessibility of a notebook and the learning opportunities arising from it, such as to what extent a resource:
- supports the user getting their own data into the notebook.
- demonstrates the combination of multiple techniques into research.
- helps a researcher choose techniques relevant to their research question.
- supports the user to experiment with the code of the notebook
- demonstrates the processes and challenges around using/applying a technique and the code needed to implement those decisions e.g. decisions to make before and after applying topic models. 

Overall, we’ve talked little about how notebooks present their content, and how that presentation might affect user engagement and the sustainability of the resource. Of course, those concerns are also important in looking at principles for quality in notebook resources for digital humanities and other text analytics users.

