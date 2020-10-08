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
    const aboutTags = ["gatsby", "react", "nodejs", "html", "css", 
                        "angular", "python", "javascript", "mongodb",
                        "clang", "csharp", "typescript", "oracle", "sqlserver",
                        "mysql", "redis", "flutter", "graphql"
                    ]
    const tags = {}
    labels.forEach(label => {
        if(aboutTags.indexOf(label.tag) > -1)
            tags[label.tag] = {"name": label.name, "color": label.color}
        // aboutTags.forEach(tag => {
        //     if (tag === label.tag) {
        //         tags[tag] = label.name
        //     }
        // })
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
                        
                        <div>
                            <h4 className="ml-4">Technologies I'm good with</h4>
                            {/* <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span> */}
                            {/* <p className="d-inline-block ml-4 w-75 align-top">Languages I'm good with</p> */}
                            <div className="ml-5">
                                <TechTag tag="angular" tech="Angular" name={tags["angular"].name} size={20} color={tags["angular"].color} />
                                <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"].name} size={20} color={tags["nodejs"].color} />
                                <TechTag tag="javascript" tech="Javascript" name={tags["javascript"].name} size={20} color={tags["javascript"].color} />
                                <TechTag tag="typescript" tech="Typescript" name={tags["typescript"].name} size={20} color={tags["typescript"].color} />
                                <TechTag tag="python" tech="Python" name={tags["python"].name} size={20} color={tags["python"].color} />
                                <TechTag tag="csharp" tech="C sharp" name={tags["csharp"].name} size={20} color={tags["csharp"].color} />
                                <TechTag tag="clang" tech="C language" name={tags["clang"].name} size={20} color={tags["clang"].color} />
                            </div>  
                        </div>
                        <div className="mt-4 mb-4">
                            <h4 className="ml-4">Databases that I Like</h4>
                            {/* <span className="text-success d-inline-block" title="prism">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-4 w-75 align-top">Databases that I Like</p> */}
                            <div className="ml-5">
                                <TechTag tag="oracle" tech="Oracle" name={tags["oracle"].name} size={20} color={tags["oracle"].color} />
                                <TechTag tag="sqlserver" tech="SQL Server" name={tags["sqlserver"].name} size={20} color={tags["sqlserver"].color} />
                                <TechTag tag="mysql" tech="MySQL" name={tags["mysql"].name} size={20} color={tags["mysql"].color} />
                                <TechTag tag="mongodb" tech="MongoDB" name={tags["mongodb"].name} size={20} color={tags["mongodb"].color} />
                                <TechTag tag="redis" tech="Redis" name={tags["redis"].name} size={20} color={tags["redis"].color} />
                            </div>  
                        </div>
                        <div className="mb-4">
                            <h4 className="ml-4">Technologies used making this Blog</h4>
                            {/* <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span> */}
                            {/* <p className="d-inline-block ml-3 w-75 align-top">Blazing fast Gatsby site powered by GraphQL, as you'd expect from a Gatsby site</p> */}
                            <div className="ml-5">
                                <TechTag tag="gatsby" tech="Gatsby" name={tags["gatsby"].name} size={20} color={tags["gatsby"].color} />
                                <TechTag tag="react" tech="React" name={tags["react"].name} size={20} color={tags["react"].color} />
                                <TechTag tag="graphql" tech="GraphQL" name={tags["graphql"].name} size={20} color={tags["graphql"].color} />
                            </div> 
                        </div>
                        <div>
                            <h4 className="ml-4">Interests in Mobile App Development</h4>
                            {/* <span className="text-success d-inline-block" title="icons">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Interests in Mobile App Development</p> */}
                            <div className="ml-5">
                                <TechTag tag="flutter" tech="Flutter" name={tags["flutter"].name} size={20} color={tags["flutter"].color} />
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

