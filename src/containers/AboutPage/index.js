import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { fetchContributors } from '../../actions.js'
import style from './style.scss'
import GitHubButtons from '../../../lib/github-buttons'
const s = name => style[name] || name

class AboutPage extends Component {
  componentDidMount () {
    const {
      name,
      fetchContributors
    } = this.props
    fetchContributors(name)
      .then(() => {
        GitHubButtons.render(this.frontendStarButton)
        GitHubButtons.render(this.backendStarButton)
      })
  }

  render () {
    const { contributors } = this.props
    if (!contributors) {
      return null
    }

    return (
      <div className={s('aboutpage')}>
        <div className={s('card')} style={{ margin: 0 }}>
          <h2 className={s('aboutpage--heading')} style={{ marginTop: 0 }}>
            Open source
          </h2>

          <div style={{ textAlign: 'center' }}>
            <a href="https://github.com/SentiSocial" target="_blank" rel="noopener">
              <img className={s('aboutpage--sentisociallogo')}
                src="/assets/graphics/logo.png"
                alt="SentiSocial Logo"
                width="128"
              />
              <p>
                <img className={s('aboutpage--githublogo')}
                  src="/assets/graphics/github.svg"
                  alt="GitHub Logo"
                  width="16"
                />
                https://github.com/SentiSocial
              </p>
            </a>

            <p>
              <a className="github-button"
                href="https://github.com/SentiSocial/frontend"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star SentiSocial/frontend on GitHub"
                ref={el => { this.frontendStarButton = el }}
              >
                Frontend
              </a>
              &nbsp;
              <a className="github-button"
                href="https://github.com/SentiSocial/backend"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star SentiSocial/backend on GitHub"
                ref={el => { this.backendStarButton = el }}
              >
                Backend
              </a>
            </p>
          </div>

          <h2 className={s('aboutpage--heading')}>
            Contributors
          </h2>

          <div className={s('aboutpage--contributors')}>
            {contributors.map(contributor => (
              <a
                href={contributor.html_url}
                className={s('aboutpage--contributors-anchor')}
                target="_blank"
                rel="noopener"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login + ' Avatar'}
                  width="64"
                />
                <span>{contributor.login}</span>
              </a>
            ))}
          </div>

          <h2 className={s('aboutpage--heading')}>
            Attribution
          </h2>

          <div>
            Powered by <a href="https://newsapi.org" target="_blank" rel="noopener">NewsApi</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    contributors: state.contributors
  }),
  dispatch => ({
    fetchContributors: () => dispatch(fetchContributors())
  })
)(AboutPage)