import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style';

export default class Header extends Component {
    render() {
        return (
            <header class={style.header}>
                <h4>MEP</h4>
                <nav>
                    <Link activeClassName={style.active} href="/">Home</Link>
                    <Link activeClassName={style.active} href="/add">Add</Link>
                </nav>
            </header>
        );
    }
}
