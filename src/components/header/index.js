import {h, Component} from 'preact';
import {Link} from 'preact-router/match';

export default class Header extends Component {
    render() {
        return (
            <header class="header">
                <h4>MEP</h4>
                <nav>
                    <Link activeClassName="active" href="/">Home</Link>
                    <Link activeClassName="active" href="/add">Add</Link>
                </nav>
            </header>
        );
    }
}
