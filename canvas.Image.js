define("canvas.Image", function() {
    //Spriting object template that currently always uses vertical sprites
    return function(img, options){
        if(typeof(options) === "undefined"){
            options = {};
        }
        
        //This will only work in webkit and firefox because I use naturalWidth/naturalHeight
        //In other browsers you must set them manually
        options.__proto__ = {scale: 1, x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight};
        
        //public variables
        this.width = options.width;
        this.height = options.height;
        this.x = options.x;
        this.y = options.y;
        
        //setters
        this.setWidth = function(width){
            options.width = width;
            this.width = width;
        };
        this.setHeight = function(height){
            options.height = height;
            this.height = height;
        }
        this.setX = function(x){
            options.x = x;
            this.x = x;
        }
        this.setY = function(y){
            options.y = y;
            this.y = y;
        }
        this.setProps = function(attr, prop){
            if(typeof(attr) !== "object"){
                options[attr] = prop;
                this[attr] = prop;
            }else{
                for(var i in attr){
                    options[i] = attr[i];
                    this[i] = attr[i];
                }
            }
        }
        //getters
        this.getWidth = function(){
            return this.width;
        };
        this.getHeight = function(){
            return this.height;
        };
        this.getX = function(){
            return this.x;
        };
        this.getY = function(){
            return this.Y;
        };
        
        this.draw = function(opts){
            if(typeof(opts) === "undefined"){
                opts = {};
            }
            opts.__proto__ = options
            this.setProps({"width":this.width, "height":this.height, "x": this.x, "y": this.y});
            opts.ctx.drawImage(img, opts.x, opts.y, opts.width, opts.height);
        };
    }
});
