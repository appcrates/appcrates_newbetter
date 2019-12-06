require('isomorphic-fetch');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}/` : 'https://bettertogether.group/';

class Subscribe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(formInput) {
        this.setState({formValue: formInput});
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const email = this.state.formValue;

        try {
            fetch(`${ROOT_URL}api/subscribe`,
                {
                    header: {'Content-Type': 'application/x-www-form-urlencoded'},
                    method: 'POST',
                    mode: 'cors',
                    body: email
                }).catch(error => console.log(error));

            this.setState({formValue: "Email Submitted!"})

        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className='subscribeContainer'>
                <form className={this.props.formClass || "subscribeInput"} onSubmit={this.handleSubmit}>
                    <input type="email"
                           placeholder="Enter Your Email"
                           value={this.state.formValue}
                           onChange={(e) => this.handleChange(e.target.value)}
                           className={this.props.inputClass || "form-control search"}
                           required />
                    { this.props.customButton }
                </form>
                <style jsx>{`
                .footerSub {
                    align-items: right;
                    display: flex;
                    flex-direction: column;
                }
                .footerInput {
                    background-color: white;
                    border: none;
                    background-color: white;
                    width: 100%;
                    display: flex;
                    padding: 6px 0px 6px 14px;
                    min-height: 50px;
                    max-width: 95%;
                }
                .subscribeContainer {
                    width: 100%;
                },
                .subscribeInput {
                    border-radius: 30px;
                    border: none;
                    background-color: white;
                    width: 100%;
                    display: flex;
                    padding: 6px 0px 6px 14px;
                },
                .scrh {
                    background: transparent;
                    border: none;
                    padding: 0px;
                    float: right;
                }
                .layer_122{
                    background: #ca3535;
                    padding: 6px 13px;
                    border-radius: 50%;
                    margin-right: 8px;
                    float: right;
                }`}
                </style>
            </div>
        );
    }
}

export default Subscribe