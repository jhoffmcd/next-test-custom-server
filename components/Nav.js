import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
    render() {
        return <div>
            <h3>{`<Link>`} Nav</h3>
            <ul>
                <li>
                    <Link
                        href={{ pathname: '/posts', query: { id: '1' } }}
                        as='/posts/1'
                    >
                        <a>post #1</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href={{ pathname: '/posts', query: { id: '2' } }}
                        as='/posts/2'
                    >
                        <a>post #2</a>
                    </Link>
                </li>
            </ul>

            <h3>Non {`<Link>`} Nav</h3>
            <ul>
                <li>
                    <a href='/posts/1'>
                        post #1
            </a>
                </li>
                <li>
                    <a href='/posts/2'>
                        post #2
            </a>
                </li>
            </ul>
        </div>
    }
}
