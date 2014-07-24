function add (item) {
    var foot = Session.get("foot");
    foot.push(item);
    Session.set("foot",foot)}

function remove (item) {
  var foot = Session.get("foot"),
      i    = foot.indexOf(item);
  if (i > -1) {
    Session.set("foot",foot.slice(0, i).concat(foot.slice(i+1)))
  };    
} 

if (Meteor.isClient) {
  Template.names.vistornames = ["jack","joce","kit"];
  Template.names.myname = "Yuki Lip";
  Template.names.date = "2014.7.16";

  Template.staff.person = [
    {firstname:"jack",sex:"male"},
    {firstname:"kit",sex:"female"},
    {firstname:"alice",sex:"female"},
    {firstname:"lei",sex:"male"}
  ];
  Template.girl.executive = function () {
    return !!this.sex.match(/^m.*e$/)
  };

  Template.nowdate.newdate = function () {
    return new Date
    
  };

  Session.set("foot", ["one","apple"]);

  Template.jul23.feet = function () {
    return Session.get("foot");
  };

  Template.jul23.events ({
    'keypress input' : function (e,t) 
    {if (e.keyCode === 13) {
        var input = t.find("input");
        add(input.value);
        input.value = "";}
    } 
  });

  Template.foot.events ({
    'click' : function (e, t) {
      remove(t.data);
  }

});


};  