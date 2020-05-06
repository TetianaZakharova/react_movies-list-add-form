(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,r){e.exports=r(20)},,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),l=r(6),n=r.n(l),m=(r(15),r(9)),o=r(1),s=r(2),c=r(4),d=r(3),u=(r(16),r(17),r(18),function(e){var t=e.title,r=e.description,a=e.imgUrl,l=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:a,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},r,i.a.createElement("br",null),i.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var b=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(u,Object.assign({key:e.imdbId},e))})))};b.defaultProps={movies:[]};r(19);var h=r(7),g=r.n(h),f=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,E=function(e){Object(c.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleError:!1,imgUrlError:!1,imdbUrlError:!1,imdbIdError:!1},e.handleTitleChange=function(t){e.setState({title:t.target.value,titleError:!1})},e.handleDescriptionChange=function(t){e.setState({description:t.target.value})},e.handleImgUrlChange=function(t){e.setState({imgUrl:t.target.value,imgUrlError:!1})},e.handleImdbUrlChange=function(t){e.setState({imdbUrl:t.target.value,imdbUrlError:!1})},e.handleImdbIdChange=function(t){e.setState({imdbId:t.target.value,imdbIdError:!1})},e.handleReset=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleError:!1,imgUrlError:!1,imdbUrlError:!1,imdbIdError:!1})},e.blurTitleError=function(){e.state.title.trim()||e.setState({titleError:!0})},e.blurImgUrlError=function(){f.test(e.state.imgUrl)||e.setState({imgUrlError:!0})},e.blurImdbUrlError=function(){f.test(e.state.imdbUrl)||e.setState({imdbUrlError:!0})},e.blurImdbIdError=function(){e.state.imdbId.trim()||e.setState({imdbIdError:!0})},e.handleSubmit=function(t){t.preventDefault();var r=e.state,a=r.title,i=r.description,l=r.imgUrl,n=r.imdbUrl,m=r.imdbId;if(a.trim()&&f.test(l)&&f.test(n)&&m.trim()){var o={title:a,description:i,imgUrl:l,imdbUrl:n,imdbId:m};e.props.addMovie(o),e.handleReset()}else e.setState({titleError:!a.trim(),imgUrlError:!f.test(l),imdbUrlError:!f.test(n),imdbIdError:!m.trim()})},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state,t=e.title,r=e.description,a=e.imgUrl,l=e.imdbUrl,n=e.imdbId,m=e.titleError,o=e.imgUrlError,s=e.imdbUrlError,c=e.imdbIdError;return i.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},i.a.createElement("label",{className:"form__label"},"Title",i.a.createElement("input",{className:g()({form__field:!0,form__fieldError:m}),value:t,onChange:this.handleTitleChange,onBlur:this.blurTitleError}),i.a.createElement("div",null,m&&i.a.createElement("span",{className:"form__errorMsg"},"Enter a Title Please"))),i.a.createElement("label",{className:"form__label"},"Description",i.a.createElement("textarea",{className:"form__field",value:r,onChange:this.handleDescriptionChange})),i.a.createElement("label",{className:"form__label"},"imgUrl",i.a.createElement("input",{className:o?"form__field form__field--error":"form__field",value:a,onChange:this.handleImgUrlChange,onBlur:this.blurImgUrlError}),i.a.createElement("div",null,o&&i.a.createElement("span",{className:"form__errorMsg"},"Enter image URL please"))),i.a.createElement("label",{className:"form__label"},"imdbUrl",i.a.createElement("input",{value:l,className:s?"form__field form__field--error":"form__field",onChange:this.handleImdbUrlChange,onBlur:this.blurImdbUrlError}),i.a.createElement("div",null,s&&i.a.createElement("span",{className:"form__errorMsg"},"Enter imdb URL please"))),i.a.createElement("label",{className:"form__label"},"imdbId",i.a.createElement("input",{value:n,className:c?"form__field form__field--error":"form__field",onChange:this.handleImdbIdChange,onBlur:this.blurImdbIdError}),i.a.createElement("div",null,c&&i.a.createElement("span",{className:"form__errorMsg"},"Enter movie ID please"))),i.a.createElement("div",{className:"form__btnDiv"},i.a.createElement("button",{type:"submit",className:"form__btn"},"Add Movie")))}}]),r}(a.Component),p=r(8),v=function(e){Object(c.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={movies:p},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(b,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(E,{addMovie:this.addMovie})))}}]),r}(a.Component);n.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.3d829032.chunk.js.map