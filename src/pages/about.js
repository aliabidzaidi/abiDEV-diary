import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["gatsby", "react", "nodejs", "html", "css", "angular", "python", "javascript", "mongodb"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i>Welcome to my DEV diary, this is where I share my Blogs related to programming and my views on technology.</i></p>
                        <br />
                        <h4>Features</h4>
                        <div className="mb-4">
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Blazing fast Gatsby site powered by GraphQL, as you'd expect from a Gatsby site</p>
                            <div className="ml-5">
                                <TechTag tag="gatsby" tech="Gatsby" name={tags["gatsby"]} size={20} color="purple" />
                            </div> 
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Languages I'm good with</p>
                            <div className="ml-5">
                                <TechTag tag="angular" tech="Angular" name={tags["angular"]} size={20} color="red" />
                                <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"]} size={20} color="lightgreen" />
                                <TechTag tag="javascript" tech="Javascript" name={tags["javascript"]} size={20} color="yellow" />
                                <TechTag tag="typescript" tech="Typescript" name={tags["typescript"]} size={20} color="blue" />
                                <TechTag tag="python" tech="Python" name={tags["python"]} size={20} color="steelblue" />
                                <TechTag tag="csharp" tech="C#" name={tags["csharp"]} size={20} color="white" />
                                <TechTag tag="clang" tech="C" name={tags["clang"]} size={20} color="white" />
                            </div>  
                        </div>
                        <div className="mt-4 mb-4">
                            <span className="text-success d-inline-block" title="prism">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Databases that I Like</p>
                            <div className="ml-5">
                                <TechTag tag="X" tech="Oracle" name={tags["X"]} size={20} color="white" />
                                <TechTag tag="X" tech="SQL Server" name={tags["X"]} size={20} color="white" />
                                <TechTag tag="X" tech="MySQL" name={tags["X"]} size={20} color="white" />
                                <TechTag tag="mongodb" tech="MongoDB" name={tags["mongodb"]} size={20} color="green" />
                                <TechTag tag="X" tech="Redis" name={tags["X"]} size={20} color="white" />
                            </div>  
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Interests in Mobile App Development</p>
                            <div className="ml-5">
                                <TechTag tag="X" tech="Flutter" name={tags["X"]} size={20} color="white" />
                             </div>  
                        </div>
                        {/* <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Mobile responsive, of course</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

