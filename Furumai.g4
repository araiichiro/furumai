grammar Furumai;

story: moment ('---' moment)* '---'? EOF;
moment: stmt_list ;

stmt_list: stmt (';' stmt)* ';'? ;
stmt: node_stmt
    | edge_stmt
    | attr_stmt
    | assignment
    | group
    | zone
    | hide
    | config
    ;

attr_stmt : (GROUP | NODE | EDGE | ZONE) attr_list ;
config : CONFIG attr_list
       | CONFIG '=' ID // TODO @deprecated
       ;
attr_list : '[' assignment ( ( ',' | ';' )?  assignment)* ']' ;
assignment : ID '=' ID ;

edge_stmt : ID EDGEOP ID attr_list? ;

node_stmt : ID attr_list? ;

group : GROUP ID '{' stmt_list '}' ;
zone  : ZONE  ID '{' stmt_list '}' ;

hide: (HIDE | DELETE) (ID | ID EDGEOP ID);

NODE : 'node' ;
EDGE : 'edge' ;
GROUP: 'group' ;
ZONE : 'zone' ;
HIDE: 'hide' ;
DELETE: 'delete' ;
CONFIG : 'config' ;

EDGEOP : '->'
       | '--'
       ;

ID : '\'' (~'\'')* '\'' {this.text = this.text.slice(1, -1)}
   | '"' (~'"')* '"' {this.text = this.text.slice(1, -1)}
   | [a-zA-Z_0-9\-] [a-zA-Z_0-9.\-]*
   ;

SPACES : [ \u000B\t\r\n] -> channel(HIDDEN) ;
