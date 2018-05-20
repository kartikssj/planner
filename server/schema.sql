
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `hours` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tasks` (
  `id` varchar(36) NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `userid` varchar(36) NOT NULL,
  /* basic */
  `title` varchar(256) NOT NULL,
  `time_minutes` INT,
  `deadline` timestamp NULL DEFAULT NULL,
  `result_positive` FLOAT,
  `result_negative` FLOAT,
  /* filter */
  `filter_days` varchar(50) NOT NULL DEFAULT 'true,true,true,true,true,true,true',
  /* recurring */
  `freq_minutes` INT,
  `starting` timestamp NULL DEFAULT NULL,	
  `last_done` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

