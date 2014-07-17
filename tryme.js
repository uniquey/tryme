
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
    
  }

};  