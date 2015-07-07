/**
 * Created by AlexLiu on 2015/6/2.
 */

var Reflux = require('reflux');
var request = require('superagent');
var _ = require('lodash');

var actions = require('../actions/app-actions');

var ProductStore = Reflux.createStore({
        listenables: [actions],
        init(){
        this.data = {

            products:[]
        };
        //this.listenTo(actions.loadPage, this.loadPage);
        //this.listenTo(actions.editItem, this.onEditItem);
        //this.listenTo(actions.removeItem, this.onRemoveItem);
    },

    onLoadPage(page, itemsNum){
        //request.get('/data/').end((err, res) => {
        //    debugger;
        //
        //
        //});
        var content = [];
        for(var i=0; i<15; i++){
            content.push({
                name: 'name' + i,
                stock: 'stock' + i,
                id: i
            });
        }

        this.data.products = content || JSON.parse(res.content);
        this.trigger(this.data);

    },
    getData: function(){
        return this.data;
    },

    getItemById: function(id){
        var item = _.find(this.data.products, {'id': +id});

        return item || {};
    },
    onEditItem: function(){

    },

    onRemoveItem: function(item){
        debugger;
        var itemToRemove = _.find(this.data.products, {'id': item.id});
        var itemIndex = this.data.products.indexOf(itemToRemove);
        if(typeof itemToRemove === 'object'){
            this.data.products.splice(itemIndex, 1);
            this.updateList(this.data)
        }
    },

    updateList: function(data){
        this.data = data;
        this.trigger(this.data);
    },

    getInitialState(){
        return this.data;
    }
});

module.exports = ProductStore;