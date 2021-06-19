grammar Furumai;

story
  : config? layout ( '---' update )* '---'? EOF
  ;
config
  : '@config' '{' declaration? ( ';' declaration )* ';'? '}'
  ;
layout
  : stmt_list
  ;
update
  : stmt_list
  ;

stmt_list
  : stmt ( ';' stmt )* ';'?
  ;

stmt
  : group
  | zone
  | node_stmt
  | edge_stmt
  | hide
  | assignment
  | style
  ;

group
  : 'group' ID '{' stmt_list '}'
  ;

zone
  : 'zone' ID '{' stmt_list '}'
  ;

node_stmt
  : ID attr_list?
  ;

edge_stmt
  : ID EDGEOP ID attr_list?
  ;

hide
  : hide_elem
  | hide_edge
  ;

hide_elem
  : 'hide' ID
  ;

hide_edge
  : 'hide' ID EDGEOP ID
  ;

attr_list
  : '[' assignment ( ( ',' | ';' )?  assignment )* ( ',' | ';' )? ']'
  ;

assignment
  : ID ( ':' | '=' ) value
  ;

style
  : '@style' '{' css_stmt* '}'
  ;

css_stmt
  : selector_list '{' declaration? ( ';' declaration )* ';'? '}'
  ;

selector_list
  : selector ( ',' selector )* ','?
  ;

selector
  : basic_selector+
  ;

basic_selector
  : univ_selector
  | type_selector
  | class_selector
  | id_selector
  | edge_selector
  ;

univ_selector
  : '*'
  ;
type_selector
  : ID
  ;
class_selector
  : '.' ID
  ;
id_selector
  : '#' ID
  ;
edge_selector
  : ID EDGEOP ID
  ;

declaration
  : ID ':' value+
  ;

value
  : COLOR
  | STRING
  | ID
  ;

ID
  : CHARS ('-' CHARS)*
  ;

fragment CHARS
  : [a-zA-Z_0-9]+
  ;

STRING
  : '\'' ( ~'\'' )* '\'' { this.text = this.text.slice(1, -1)}
  | '"' ( ~'"' )* '"' { this.text = this.text.slice(1, -1) }
  ;

COLOR
  : '#' HEX HEX HEX
  | '#' HEX HEX HEX HEX HEX HEX
  ;

fragment HEX
  : [a-fA-F0-9]
  ;

EDGEOP
  : '--'
  | '->'
  ;

SPACES
  : [ \u000B\t\r\n] -> channel(HIDDEN)
  ;
