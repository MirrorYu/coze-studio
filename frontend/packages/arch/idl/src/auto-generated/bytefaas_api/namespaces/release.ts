/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as common from './common';

export type Int64 = string | number;

/** Options for canceling a release */
export interface CancelOptions {
  /** Type of cancel operation */
  type?: number;
}

export interface CreateReleaseRequest {
  /** must be `default` for now */
  alias_name?: string;
  /** cluster name */
  cluster: string;
  /** region name */
  region: string;
  /** the ratio of traffic of each rolling from old revision to new one */
  rolling_step?: number;
  /** ID of service */
  service_id: string;
  /** container one/two revision, the key is revision id, value is the traffic ratio, [A: 20, B: 80] for example */
  target_traffic_config?: Record<string, number>;
  /** zone level traffic setting */
  zone_traffic_config?: Record<string, common.MapMessage>;
  /** jwt token */
  'X-Jwt-Token'?: string;
  /** 0 - 先杀后起， 1 - 先起后杀 */
  rolling_strategy?: number;
  /** 滚动间隔，单位（s） */
  rolling_interval?: number;
  /** 滚动完成判断条件 1：最少百分之 N 的容器创建；数值范围（1-100） */
  min_created_percentage?: number;
  /** 滚动完成判断条件 2：最少百分之 N 的容器启动完成；数值范围（1-100） */
  min_ready_percentage?: number;
}

export interface CreateReleaseResponse {
  /** Response code */
  code?: number;
  /** List of release response data */
  data?: Array<ReleaseResponseData>;
  /** Error message if present */
  error?: string;
}

export interface CreateTicketRequest {
  /** approved user. 审核人 */
  approved_by?: string;
  /** type of approved user. 审核用户类型。Enums: "person_account","service_account" */
  approved_by_usertype?: string;
  /** release cluster, use default cluster when without it. 发布的集群, 不填则为默认集群 */
  cluster?: string;
  /** ID of used code revision, lower priority than use_latest_code_revision. 代码版本 ID, 用指定代码版本进行发布 */
  code_revision_id?: string;
  /** description of this release. 发布描述 */
  description?: string;
  /** release region. 发布的 region */
  region: string;
  /** release type, enums: runtime_update、runtime_release. 发布类型 */
  release_type?: string;
  /** replica limit. 实例数，只用作第一次发布时需要。 */
  replica_limit?: Record<string, common.EmptyObject>;
  /** ID of revision, only works when rollback is true, lower priority than code_revision_id. 版本 ID, 回滚至某一个 revision */
  revision_id?: string;
  /** create ticket of rollback action. 回滚 */
  rollback?: boolean;
  /** rolling step. 滚动比例 */
  rolling_step?: number;
  /** ID of service */
  service_id: string;
  /** use latest code revision. 使用最新的代码版本进行发布 */
  use_latest_code_revision?: boolean;
  /** grey mqevent config. 灰度触发器配置 */
  grey_mqevent_config?: Array<common.GreyMQEvent>;
  /** the code config. 发布的代码配置 */
  code_source?: string;
  /** the mqevent release type, enums: hot_load, deployment_rolling. 触发器发布类型配置 */
  mqevent_release_type?: string;
  /** whether use pipeline to drive this ticket execution */
  is_pipeline_ticket?: boolean;
  /** pipeline template type, enums: NormalRelease, IdcRelease, MultiClusterGrayNormalRelease, MultiClusterGrayIdcRelease, MultiClusterNormalRelease, MultiClusterIdcRelease, ClusterUpdate, ClusterCreate, ClusterDelete, LegoRelease, LegoIdcRelease, MultiClusterLegoGrayNormalRelease, MultiClusterLegoGrayIdcRelease, MultiClusterLegoNormalRelease, MultiClusterLegoIdcRelease, MultiClusterLegoAMLRelease, MqCanaryRelease */
  pipeline_template_type?: string;
  /** pipeline template id */
  pipeline_template_id?: string;
  /** 0 - 先杀后起， 1 - 先起后杀 */
  rolling_strategy?: number;
  /** 滚动间隔，单位（s） */
  rolling_interval?: number;
  /** 滚动完成判断条件 1：最少百分之 N 的容器创建；数值范围（1-100） */
  min_created_percentage?: number;
  /** 滚动完成判断条件 2：最少百分之 N 的容器启动完成；数值范围（1-100） */
  min_ready_percentage?: number;
}

/** Message structure for formatted target traffic configuration in ticket request */
export interface CreateTicketRequestFormatTargetTrafficConfigMessage {
  /** filled with revision ID, default to $LATEST */
  revision_id?: string;
  /** Traffic value for the revision */
  traffic_value?: number;
}

/** Message structure for zone traffic configuration in ticket request */
export interface CreateTicketRequestFormatZoneTrafficConfigMessage {
  /** Zone name */
  zone?: string;
  /** List of traffic configurations for the zone */
  zone_traffic_config?: Array<CreateTicketRequestFormatZoneTrafficConfigMessageZoneTrafficConfigMessage>;
}

/** Message structure for formatted zone traffic configuration in ticket request */
export interface CreateTicketRequestFormatZoneTrafficConfigMessageZoneTrafficConfigMessage {
  /** filled with code revision ID, default to $LATEST */
  revision_id?: string;
  /** Traffic value for the zone revision */
  traffic_value?: number;
}

export interface GetLatestReleaseRequest {
  /** cluster name */
  cluster: string;
  /** region */
  region: string;
  /** ID of service */
  service_id: string;
  /** JWT token */
  'X-Jwt-Token'?: string;
}

export interface GetLatestReleaseResponse {
  /** Response code */
  code?: number;
  /** Data of the latest release */
  data?: ReleaseResponseData;
  /** Error message if present */
  error?: string;
}

export interface GetReleaseByIDRequest {
  /** cluster name */
  cluster: string;
  /** region name */
  region: string;
  /** release ID */
  release_id: string;
  /** ID of service */
  service_id: string;
  /** jwt token */
  'X-Jwt-Token'?: string;
}

export interface GetReleaseByIDResponse {
  /** Response code */
  code?: number;
  /** Data of the release */
  data?: ReleaseResponseData;
  /** Error message if present */
  error?: string;
}

export interface GetReleaseRequest {
  /** cluster name */
  cluster: string;
  /** region name */
  region: string;
  /** ID of service */
  service_id: string;
}

export interface GetReleaseResponse {
  /** Response code */
  code?: number;
  /** List of release records */
  data?: Array<ReleaseRecord>;
  /** Error message if present */
  error?: string;
}

export interface GetReleaseStartInfoByIDRequest {
  /** cluster name */
  cluster: string;
  /** region name */
  region: string;
  /** release ID */
  release_id: string;
  /** ID of service */
  service_id: string;
  /** ID of revision */
  revision_id?: string;
}

export interface GetReleaseStartInfoByIDResponse {
  /** Response code */
  code?: number;
  /** List of pod start information */
  data?: Array<PodStartInfo>;
  /** Error message if present */
  error?: string;
}

export interface GetServiceTicketByIDRequest {
  /** ID of service */
  service_id: string;
  /** ID of ticket */
  ticket_id: string;
}

export interface GetServiceTicketByIDResponse {
  /** Response code */
  code?: number;
  /** Ticket data */
  data?: common.Ticket;
  /** Error message if present */
  error?: string;
}

export interface GetTicketsRequest {
  /** Ticket category */
  category?: string;
  /** Change type of the ticket, enums: "create","update","delete" */
  change_type?: string;
  /** Cluster name */
  cluster?: string;
  /** Ticket ID */
  id?: string;
  /** Maximum create time for the ticket */
  max_create_time?: string;
  /** Minimum create time for the ticket */
  min_create_time?: string;
  /** Region of the ticket */
  region: string;
  /** ID of service */
  service_id: string;
  /** Status of the ticket. enums: pending, running, building, canceling, failed, success, canceled, aborting, aborted, rollbacked */
  status?: string;
  /** Trigger ID for the ticket */
  trigger_id?: string;
  /** Trigger type for the ticket，enums: mqevents, tos, abase_binlog, timer, consul, http, event_bridge */
  trigger_type?: string;
  /** type of tickets */
  type?: string;
  /** Whether the ticket contains multiple clusters */
  contains_multi_clusters?: boolean;
  /** Offset for pagination */
  offset?: number;
  /** Limit for pagination */
  limit?: number;
}

export interface GetTicketsResponse {
  /** Response code */
  code?: number;
  /** List of tickets */
  data?: Array<common.Ticket>;
  /** Error message if present */
  error?: string;
  /** Count of tickets */
  count?: number;
}

/** Log item structure */
export interface LogItem {
  /** Log content */
  content?: string;
  /** Log category */
  category?: string;
  /** Log level */
  level?: string;
}

/** Information about a multi-cluster release */
export interface MultiCusterReleaseInfo {
  /** Region of the cluster */
  region?: string;
  /** Cluster name */
  cluster?: string;
  /** Rolling step value */
  rolling_step?: number;
  /** Replica limit configuration */
  replica_limit?: Record<string, common.EmptyObject>;
  /** Formatted target traffic configuration */
  format_traffic_config: Array<CreateTicketRequestFormatTargetTrafficConfigMessage>;
  /** Formatted zone traffic configuration */
  format_zone_traffic_config?: Array<CreateTicketRequestFormatZoneTrafficConfigMessage>;
  /** Grey MQ event configuration */
  grey_mqevent_config?: Array<common.GreyMQEvent>;
  /** 0 - 先杀后起， 1 - 先起后杀 */
  rolling_strategy?: number;
  /** 滚动间隔，单位（s） */
  rolling_interval?: number;
  /** 滚动完成判断条件 1：最少百分之 N 的容器创建；数值范围（1-100） */
  min_created_percentage?: number;
  /** 滚动完成判断条件 2：最少百分之 N 的容器启动完成；数值范围（1-100） */
  min_ready_percentage?: number;
}

export interface MultiCusterReleaseTicketRequest {
  /** approved user. 审核人 */
  approved_by?: string;
  /** type of approved user. 审核用户类型。Enums: "person_account","service_account" */
  approved_by_usertype?: string;
  /** ID of used code revision, lower priority than use_latest_code_revision. 代码版本 ID, 用指定代码版本进行发布 */
  code_revision_id?: string;
  /** description of this release. 发布描述 */
  description?: string;
  /** create ticket of rollback action. 回滚 */
  rollback?: boolean;
  /** use latest code revision. 使用最新的代码版本进行发布 */
  use_latest_code_revision?: boolean;
  /** the code config. 发布的代码配置 */
  code_source?: string;
  /** the mqevent release type, enums: hot_load, deployment_rolling. 触发器发布类型配置 */
  mqevent_release_type?: string;
  /** pipeline template type, enums: NormalRelease, IdcRelease, MultiClusterGrayNormalRelease, MultiClusterGrayIdcRelease, MultiClusterNormalRelease, MultiClusterIdcRelease, ClusterUpdate, ClusterCreate, ClusterDelete, LegoRelease, LegoIdcRelease, MultiClusterLegoGrayNormalRelease, MultiClusterLegoGrayIdcRelease, MultiClusterLegoNormalRelease, MultiClusterLegoIdcRelease, MultiClusterLegoAMLRelease, MqCanaryRelease */
  pipeline_template_type?: string;
  /** details of clusters for the release */
  clusters?: Array<MultiCusterReleaseInfo>;
  /** details of revisions to roll back */
  rollback_revisions?: Array<RollbackRevisions>;
  /** ID of service */
  service_id?: string;
  /** pipeline template id */
  pipeline_template_id?: string;
  /** insert quality check stages to system-defined pipeline templates */
  insert_quality_check_stages?: boolean;
  /** dry run release cluster */
  dry_run?: boolean;
  /** as user header, for internal use only */
  'x-bytefaas-as-user'?: string;
  /** is global cp ticket, for internal use only */
  'X-Bytefaas-Globalcp-Ticket'?: string;
}

export interface PatchReleaseRequest {
  /** Action to be performed */
  action?: string;
  /** Alias name of the release */
  alias_name?: string;
  /** cluster name */
  cluster: string;
  /** Target traffic configuration */
  format_target_traffic_config?: Array<RevisionTraffic>;
  /** Zone traffic configuration */
  format_zone_traffic_config?: Array<PatchReleaseRequestFormatZoneTrafficConfigMessage>;
  /** region name */
  region: string;
  /** release ID */
  release_id: string;
  /** Rolling step value */
  rolling_step?: number;
  /** ID of service */
  service_id: string;
  /** Target traffic configuration */
  target_traffic_config?: Record<string, number>;
  /** Zone traffic configuration */
  zone_traffic_config?: Record<string, common.MapMessage>;
  /** JWT token */
  'X-Jwt-Token'?: string;
  /** 0 - 先杀后起， 1 - 先起后杀 */
  rolling_strategy?: number;
  /** 滚动间隔，单位（s） */
  rolling_interval?: number;
  /** 滚动完成判断条件 1：最少百分之 N 的容器创建；数值范围（1-100） */
  min_created_percentage?: number;
  /** 滚动完成判断条件 2：最少百分之 N 的容器启动完成；数值范围（1-100） */
  min_ready_percentage?: number;
}

/** Message structure for zone traffic configuration in patch release request */
export interface PatchReleaseRequestFormatZoneTrafficConfigMessage {
  /** Zone name */
  zone?: string;
  /** List of traffic configurations for the zone */
  zone_traffic_config?: Array<RevisionTraffic>;
}

export interface PatchReleaseResponse {
  /** Response code */
  code?: number;
  /** Data of the patched release */
  data?: ReleaseResponseData;
  /** Error message if present */
  error?: string;
}

/** Pod start information structure */
export interface PodStartInfo {
  /** Pod ID */
  id?: string;
  /** Pod status */
  status?: string;
  /** Function ID associated with the pod */
  function_id?: string;
  /** Region of the pod */
  region?: string;
  /** Revision ID of the pod */
  revision_id?: string;
  /** Release record ID associated with the pod */
  release_record_id?: string;
  /** Log content for the pod start */
  content?: string;
  /** Pod name */
  pod?: string;
  /** Zone of the pod */
  zone?: string;
  /** Time when the pod was created */
  created_at?: string;
  /** Time when the pod was last updated */
  updated_at?: string;
  /** Start logs for the pod */
  start_logs?: StartLogs;
}

/** Detailed information about a release record */
export interface ReleaseRecord {
  /** Alias name of the release */
  alias_name?: string;
  /** Cell name for the release */
  cell?: string;
  /** Cold start pod configuration */
  cold_start_pods?: Record<string, number>;
  /** Time when the release was created */
  created_at?: string;
  /** User who created the release */
  created_by?: string;
  /** Current traffic configuration */
  current_traffic_config?: Record<string, number>;
  /** Current zone traffic configuration */
  current_zone_traffic_config?: Record<string, common.MapMessage>;
  /** Error code if present */
  error_code?: string;
  /** Event center ID for the release */
  event_center_id?: string;
  /** Logs of failed instances */
  failed_instance_logs?: string;
  /** Time when the release was finished */
  finished_at?: string;
  /** Formatted current traffic configuration */
  format_current_traffic_config?: Array<RevisionTraffic>;
  /** Formatted current zone traffic configuration */
  format_current_zone_traffic_config?: Array<ReleaseRecordFormatCurrentZoneTrafficConfigMessage>;
  /** Formatted pre-traffic configuration */
  format_pre_traffic_config?: Array<RevisionTraffic>;
  /** Formatted pre-zone traffic configuration */
  format_pre_zone_traffic_config?: Array<ReleaseRecordFormatPreZoneTrafficConfigMessage>;
  /** Formatted target traffic configuration */
  format_target_traffic_config?: Array<RevisionTraffic>;
  /** Formatted target zone traffic configuration */
  format_target_zone_traffic_config?: Array<ReleaseRecordFormatTargetZoneTrafficConfigMessage>;
  /** Function ID associated with the release */
  function_id?: string;
  /** the id of release record, which can be used to get the release status, with /latest_release api */
  id?: string;
  /** Pre-traffic configuration */
  pre_traffic_config?: Record<string, number>;
  /** Pre-zone traffic configuration */
  pre_zone_traffic_config?: Record<string, common.MapMessage>;
  /** Region of the release */
  region?: string;
  /** Platform where the release is deployed */
  release_platform?: string;
  /** Request ID for the release */
  request_id?: string;
  /** Rolling step value */
  rolling_step?: number;
  /** ID of service */
  service_id?: string;
  /** Source revision ID */
  source_revision?: string;
  /** Statistics for the source revision */
  source_revision_stat?: ReleaseRecordSourceRevisionStatMessage2;
  /** Current status of the release */
  status?: string;
  /** Status message for the release */
  status_message?: string;
  /** Target revision ID */
  target_revision?: string;
  /** Statistics for the target revision */
  target_revision_stat?: ReleaseRecordTargetRevisionStatMessage2;
  /** Target traffic configuration */
  target_traffic_config?: Record<string, number>;
  /** Target zone traffic configuration */
  target_zone_traffic_config?: Record<string, common.MapMessage>;
  /** Time when the release was last updated */
  updated_at?: string;
  /** 0 - 先杀后起， 1 - 先起后杀 */
  rolling_strategy?: number;
  /** 滚动间隔，单位（s） */
  rolling_interval?: number;
  /** 滚动完成判断条件 1：最少百分之 N 的容器创建；数值范围（1-100） */
  min_created_percentage?: number;
  /** 滚动完成判断条件 2：最少百分之 N 的容器启动完成；数值范围（1-100） */
  min_ready_percentage?: number;
}

/** Message structure for current zone traffic configuration in release record */
export interface ReleaseRecordFormatCurrentZoneTrafficConfigMessage {
  /** Zone name */
  zone?: string;
  /** List of traffic configurations for the zone */
  zone_traffic_config?: Array<RevisionTraffic>;
}

/** Message structure for pre-zone traffic configuration in release record */
export interface ReleaseRecordFormatPreZoneTrafficConfigMessage {
  /** Zone name */
  zone?: string;
  /** List of traffic configurations for the zone */
  zone_traffic_config?: Array<RevisionTraffic>;
}

/** Message structure for target zone traffic configuration in release record */
export interface ReleaseRecordFormatTargetZoneTrafficConfigMessage {
  /** Zone name */
  zone?: string;
  /** List of traffic configurations for the zone */
  zone_traffic_config?: Array<RevisionTraffic>;
}

/** Statistics for the source revision in a release record */
export interface ReleaseRecordSourceRevisionStatMessage2 {
  /** Revision ID */
  id?: string;
  /** Revision name */
  name?: string;
  /** Revision number */
  number?: number;
  /** Source of the revision */
  source?: string;
  /** Source type of the revision */
  source_type?: string;
}

/** Statistics for the target revision in a release record */
export interface ReleaseRecordTargetRevisionStatMessage2 {
  /** Revision ID */
  id?: string;
  /** Revision name */
  name?: string;
  /** Revision number */
  number?: number;
  /** Source of the revision */
  source?: string;
  /** Source type of the revision */
  source_type?: string;
}

/** Data for a release response */
export interface ReleaseResponseData {
  /** Release ID */
  id?: string;
  /** Function ID associated with the release */
  function_id?: string;
  /** Service ID associated with the release */
  service_id?: string;
  /** Region of the release */
  region?: string;
  /** Cell name for the release */
  cell?: string;
  /** Alias name for the release */
  alias_name?: string;
  /** Rolling step value */
  rolling_step?: number;
  /** Rolling interval in seconds */
  rolling_interval?: number;
  /** Rolling strategy type */
  rolling_strategy?: number;
  /** Minimum ready percentage for rolling */
  min_ready_percentage?: number;
  /** Minimum created percentage for rolling */
  min_created_percentage?: number;
  /** Target traffic configuration */
  target_traffic_config?: Record<string, number>;
  /** Zone level traffic configuration */
  pre_traffic_config?: Record<string, number>;
  /** Target zone traffic configuration */
  target_zone_traffic_config?: Record<string, Record<string, number>>;
  /** Pre-zone traffic configuration */
  pre_zone_traffic_config?: Record<string, Record<string, number>>;
  /** Source revision ID */
  source_revision?: string;
  /** Target revision ID */
  target_revision?: string;
  /** Current status of the release */
  status?: string;
  /** Status message for the release */
  status_message?: string;
  /** Options for canceling the release */
  cancel?: CancelOptions;
  /** Error code if present */
  error_code?: string;
  /** Request ID for the release */
  request_id?: string;
  /** Event center ID for the release */
  event_center_id?: string;
  /** User who created the release */
  created_by?: string;
  /** Time when the release was created */
  created_at?: string;
  /** Time when the release was last updated */
  updated_at?: string;
  /** Time when the release was finished */
  finished_at?: string;
  /** Whether the metadata is synced */
  meta_synced?: boolean;
  /** Cold start pod configuration */
  cold_start_pods?: Record<string, string>;
  /** Logs of failed instances */
  failed_instance_logs?: string;
  /** Platform where the release is deployed */
  release_platform?: string;
  /** Snapshots of the release status */
  status_snapshots?: Array<StatusSnapshot>;
  /** Ticket ID associated with the release */
  ticket_id?: string;
  /** Current traffic configuration */
  current_traffic_config?: Record<string, number>;
  /** Current zone traffic configuration */
  current_zone_traffic_config?: Record<string, Record<string, number>>;
  /** Statistics for the source revision */
  source_revision_stat?: ReleaseRevisionStat;
  /** Statistics for the target revision */
  target_revision_stat?: ReleaseRevisionStat;
  /** Whether the release can be rolled back */
  can_rollback?: boolean;
  /** Formatted current traffic configuration */
  format_current_traffic_config?: Array<common.FormatTrafficConfig>;
  /** Formatted current zone traffic configuration */
  format_current_zone_traffic_config?: Array<common.FormatZoneTrafficConfig>;
  /** Formatted pre-traffic configuration */
  format_pre_traffic_config?: Array<common.FormatTrafficConfig>;
  /** Formatted pre-zone traffic configuration */
  format_pre_zone_traffic_config?: Array<common.FormatZoneTrafficConfig>;
  /** Formatted target traffic configuration */
  format_target_traffic_config?: Array<common.FormatTrafficConfig>;
  /** Formatted target zone traffic configuration */
  format_target_zone_traffic_config?: Array<common.FormatZoneTrafficConfig>;
  /** Link to the system logs */
  system_log_link?: string;
  /** Link to the runtime logs */
  runtime_log_link?: string;
  /** Link to the runtime stream logs */
  runtime_stream_log_link?: string;
  /** Target canary traffic configuration */
  target_canary_traffic_config?: Record<string, number>;
  /** Pre-canary traffic configuration */
  pre_canary_traffic_config?: Record<string, number>;
  /** Formatted target canary traffic configuration */
  format_target_canary_traffic_config?: Array<common.FormatTrafficConfig>;
  /** Formatted current canary traffic configuration */
  format_current_canary_traffic_config?: Array<common.FormatTrafficConfig>;
  /** Formatted pre-canary traffic configuration */
  format_pre_canary_traffic_config?: Array<common.FormatTrafficConfig>;
}

/** Statistics for a release revision */
export interface ReleaseRevisionStat {
  /** Revision ID */
  id?: string;
  /** Revision number */
  number?: number;
  /** Revision name */
  name?: string;
  /** Source type of the revision */
  source_type?: string;
  /** Source of the revision */
  source?: string;
}

/** Traffic configuration for a revision */
export interface RevisionTraffic {
  /** Revision ID */
  revision_id: string;
  /** Traffic value for the revision */
  traffic_value: number;
}

/** Revisions to be rolled back */
export interface RollbackRevisions {
  /** Region of the cluster */
  region?: string;
  /** Cluster name */
  cluster?: string;
  /** Revision ID to roll back to */
  revision_id?: string;
}

/** Start logs structure */
export interface StartLogs {
  /** Logs during the prepare phase */
  prepare?: Array<LogItem>;
  /** Logs during the load phase */
  load?: Array<LogItem>;
  /** Logs during the initialize phase */
  initialize?: Array<LogItem>;
}

/** Snapshot of release status at a point in time */
export interface StatusSnapshot {
  /** Status value */
  status?: string;
  /** Status message */
  status_message?: string;
  /** Error code if present */
  error_code?: string;
  /** Time when status changed */
  changed_at?: string;
}
/* eslint-enable */
