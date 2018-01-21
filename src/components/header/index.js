import {h, Component} from 'preact';
import {Link} from 'preact-router/match';

export default class Header extends Component {
    render() {
        return (
            <div class="mui-appbar">
                <table width="100%">
                    <tr style="vertical-align:middle;">
                        <td class="mui--appbar-height">
                            <h4 style="padding-left: 16px;">Monthly Expense Planner</h4>
                        </td>
                        <td class="mui--appbar-height" align="right">
                            <Link class="link" activeClassName="active" href="/">
                                Home
                            </Link>
                            <Link class="link" activeClassName="active" href="/add">
                                Add
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>

        );
    }
}
