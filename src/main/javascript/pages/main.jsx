var React = require('react');
var ReactDOM = require('react-dom');
var css = require('../css/main.css');

module.exports = function () {
    var Block = React.createClass({

        getInitialState: function () {
            return {
                pageId: 'intro',
                taskDescription: 'Ну, что Вы готовы?',
                taskHandler: this.intro,
                taskVideo: require('../video/intro.mp4'),
                showVideo: 'show',
                showInput: 'notShow',
                showQuestion: 'notShow',
                button: 'Йо-Xo-Xo'
            }
        },

        componentDidMount: function () {
        },

        intro: function (event) {
            console.log('>> Переходим к заданиям...');

            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                showInput: 'show',
                taskDescription: 'Вот мое первое задание на проверку Вашей пиратской сноровки, и я посмотрю, хватит ли у Вас сил на поиски сокровищ. ' +
                'Вы должены ТОЧНО посчитать, сколько ступенек в вашем доме. И это число будет первой частью кода. ' +
                'Вторая часть кода - это количество черных меток на приглашении, внизу которого изображены ШТУРВАЛ, ЧЕРЕП, ЯКОРЬ. ' +
                'Соедините два этих числа и Вы получите код, который и будет ответом на это задание',
                taskHandler: this.task1,
                taskVideo: require('../video/task1.mp4'),
                button: 'Вперед Малявки'
            });
        },

        say: function (msg) {
            this.setState({error: msg})
        },

        task1: function (event) {
            console.log('>> Отвечаем на первое задание и пытаемся перейти к следующему заданию');

            // right code
            if (this.refs.answer.value === '111') {
                setTimeout(function() {
                    this.setState({error: 'А вот и фигушки!!!'});
                }.bind(this), 500);

                setTimeout(function() {
                    this.setState({error: 'Ладно, ладно. Шучу :)'});
                }.bind(this), 3000);

                setTimeout(function() {
                    this.setState({
                        showVideo: 'show',
                        showQuestion: 'notShow',
                        taskDescription: 'Так держать Козявки, правильно! Вот Вам номер +375-297-23-18-05, позвоните по нему и спроси Одноглазого ДЖО. ' +
                        'Он-то и скажет Вам, где спрятана первая часть карты. Ха-Ха-Ха!',
                        taskHandler: this.task2,
                        taskVideo: require('../video/task2.mp4'),
                        error: ''
                    });
                }.bind(this), 7000);
            } else {
                this.setState({
                    error: 'У кого-то ручки-крючки, пробуйте ещё раз'
                });
            }
        },

        task2: function (event) {
            console.log('>> Отвечаем на второе задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №3: необходимо ответить на вопрос 3333',
                taskHandler: this.task3,
                taskVideo: require('../video/task3.mp4')
            })
        },

        task3: function (event) {
            console.log('>> Отвечаем на третье задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №4: необходимо ответить на вопрос 4444',
                taskHandler: this.task4,
                taskVideo: require('../video/task4.mp4')
            })
        },


        task4: function (event) {
            console.log('>> Отвечаем на четвертое задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №5: необходимо ответить на вопрос 5555',
                taskHandler: this.task5,
                taskVideo: require('../video/task5.mp4')
            })
        },

        task5: function (event) {
            console.log('>> Отвечаем на пятое задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №6: необходимо ответить на вопрос 6666',
                taskHandler: this.task6,
                taskVideo: require('../video/task6.mp4')
            })
        },

        task6: function (event) {
            console.log('>> Отвечаем на последнее задание');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Спасибо Вы успешно справились со всеми заданиями',
                taskHandler: function () {
                    alert(1234);
                },
                taskVideo: 'stop'
            })
        },

        videoEnded: function () {
            console.log(">> Закончено видео на странице:" + this.state.pageId);
            this.setState({
                showVideo: 'notShow',
                showQuestion: 'show'
            });
        },

        videoHandler: function (video) {
            video.addEventListener("ended", this.videoEnded);
        },

        render: function () {
            return (
                <div id="slide">
                    <div className="center">
                        <video id="video" autoPlay src={this.state.taskVideo} controls ref={this.videoHandler}
                               className={this.state.showVideo}>
                            <source src={this.state.taskVideo} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                    <div id="question" className={this.state.showQuestion}>
                        <br/>
                        <div>
                            {this.state.taskDescription}
                        </div>
                        <div className={this.state.showInput}>
                            <label>Ответ:</label><input ref='answer' type="text"/>
                        </div>
                        <div className="error">{this.state.error}</div>
                        <button onClick={this.state.taskHandler}>{this.state.button}</button>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Block />,
        document.getElementById('content'));

};